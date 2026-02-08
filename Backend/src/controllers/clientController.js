const Client = require("../models/Client");
const ExcelJS = require('exceljs');



/* ===============================
   CREATE CLIENT (Public)
================================ */
exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({ success: true, client });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



/* ===============================
   GET ALL CLIENTS (Protected)
================================ */
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json({ success: true, clients });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



/* ===============================
   DELETE CLIENT (Protected)
================================ */
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    await client.deleteOne();
    res.json({ success: true, message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



/* ===============================
   UPDATE CLIENT STATUS (Protected)
================================ */

exports.updateClientStatus = async (req, res) => {
  const { status } = req.body;
  const allowedStatus = ["new", "in-progress", "completed"];
  if (!allowedStatus.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.json({ success: true, client });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};




/* ===============================
   GET CLIENTS BY CATEGORY (Protected)
================================ */
exports.getClientsByDomain = async (req, res) => {
  const { domain } = req.params;
  const allowedDomains = [
    "MEDICAL",
    "PHARMACY",
    "NURSING",
    "PARAMEDICAL",
    "ENGINEERING",
    "MANAGEMENT",
    "GRADUATION",
    "POST GRADUATION",
    "VOCATIONAL",
    "LANGUAGES",
    "AGRICULTURE",
    "EDUCATION",
  ];

  if (!allowedDomains.includes(domain)) {
    return res.status(400).json({
      success: false,
      message: "Invalid course domain",
    });
  }

  try {
    const clients = await Client.find({ domain }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: clients.length,
      data: clients,
    });
  } catch (error) {
    console.error("Get clients by domain error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ===============================
   EXPORT CLIENTS TO EXCEL (Protected)
================================ */
exports.exportClientsToExcel = async (req, res) => {
  try {
    console.log('Excel export request received');

    // Fetch all clients from database
    const clients = await Client.find({}).sort({ createdAt: -1 });
    
    console.log(`Found ${clients.length} clients to export`);

    if (!clients || clients.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: "No clients found to export" 
      });
    }

    // Create a new Excel workbook
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CareerGuide System';
    workbook.lastModifiedBy = 'Counselor';
    workbook.created = new Date();
    workbook.modified = new Date();
    
    const worksheet = workbook.addWorksheet('Students Data');

    // Define columns with widths - ALL COLUMNS WITH RENAMES
    worksheet.columns = [
      { header: 'S.No', key: 'sno', width: 8 },
      { header: 'Student ID', key: '_id', width: 28 },
      { header: 'Full Name', key: 'fullName', width: 25 },
      { header: 'Email', key: 'email', width: 32 },
      { header: 'Phone', key: 'phone', width: 18 },
      { header: 'Date of Birth', key: 'dob', width: 15 },
      { header: 'Country', key: 'country', width: 18 },
      { header: 'State', key: 'state', width: 18 },
      { header: 'City', key: 'city', width: 18 },
      { header: 'Education Level', key: 'eduLevel', width: 20 },
      { header: 'Domain', key: 'domain', width: 20 },
      { header: 'Course', key: 'course', width: 25 },
      { header: 'Student Problem', key: 'message', width: 40 },
      { header: 'Status', key: 'status', width: 15 },
      { header: 'Created Date', key: 'createdAt', width: 20 },
      { header: 'Last Updated', key: 'updatedAt', width: 20 }
    ];

    // Style header row
    const headerRow = worksheet.getRow(1);
    headerRow.font = { 
      bold: true, 
      size: 11, 
      color: { argb: 'FFFFFF' },
      name: 'Arial'
    };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '2E86C1' }
    };
    headerRow.alignment = { 
      vertical: 'middle', 
      horizontal: 'center',
      wrapText: true
    };
    headerRow.height = 28;

    // Add data rows
    clients.forEach((client, index) => {
      const rowData = {
        sno: index + 1,
        _id: client._id.toString(),
        fullName: client.fullName || '-',
        email: client.email || '-',
        phone: client.phone || '-',
        dob: client.dob ? new Date(client.dob).toLocaleDateString('en-IN') : '-',
        // Age column REMOVED
        country: client.country || '-',
        state: client.state || '-',
        city: client.city || '-',
        eduLevel: client.eduLevel || '-',
        domain: client.domain || '-',
        course: client.course || '-',
        message: client.message || '-', // Shows as "Student Problem"
        status: client.status || 'new',
        createdAt: new Date(client.createdAt).toLocaleString('en-IN'),
        updatedAt: new Date(client.updatedAt).toLocaleString('en-IN')
      };

      const row = worksheet.addRow(rowData);

      // Alternate row colors
      if (row.number % 2 === 0) {
        row.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'F8F9FA' }
        };
      }

      // Status color coding
      const statusCell = row.getCell('status');
      if (client.status === 'completed') {
        statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D5F4E6' } };
        statusCell.font = { color: { argb: '1A7F5C' }, bold: true };
      } else if (client.status === 'in-progress') {
        statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF3CD' } };
        statusCell.font = { color: { argb: '856404' }, bold: true };
      }

      // Center align S.No
      row.getCell('sno').alignment = { horizontal: 'center' };
      
      // Wrap text for Student Problem column
      row.getCell('message').alignment = { wrapText: true };
    });

    // Generate filename
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const filename = `Students_Data_${timestamp}.xlsx`;

    // Set response headers
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    console.log(` Excel file "${filename}" ready for download (${clients.length} records)`);

    // Write to response
    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.error('❌ Excel export error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to export data to Excel',
      error: error.message 
    });
  }
};