const Invoice = require("../models/invoiceModels")

exports.getInvoice = async (req, res) => {
    try {
        const invoices = await Invoice.find(); 
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

exports.addInvoice = async (req, res) => {
    const { user, date, imageUrl, totalAmount, items  } = req.body
    try {
    const newInvoice = new Invoice({
        user,
        date,
        imageUrl,
        totalAmount,
        items,
    })
    const savedInvoice = await newInvoice.save()
    res.status(201).json(savedInvoice)
} catch (err) {
    res.status(400).json({
        message: err.message
    })
}
}