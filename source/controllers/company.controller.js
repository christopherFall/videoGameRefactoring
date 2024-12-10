//source/controllers/company.controller.js
const Company = require('../models/company.model');

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.status(200).json({ ok: true, body: companies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.getCompanyById = async (req, res) => {
    const { id } = req.params;
    try {
        const company = await Company.findOne({ where: { id } });
        if (!company) {
            return res.status(404).json({ ok: false, message: "COMPANY NOT FOUND" });
        }
        res.status(200).json({ ok: true, body: company });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.createCompany = async (req, res) => {
    const companyData = req.body;
    try {
        const newCompany = await Company.create(companyData);
        res.status(201).json({ ok: true, body: newCompany });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.updateCompany = async (req, res) => {
    const { id } = req.params;
    const companyData = req.body;
    try {
        const updatedCompany = await Company.update(companyData, { where: { id } });
        if (!updatedCompany[0]) {
            return res.status(404).json({ ok: false, message: "COMPANY NOT FOUND" });
        }
        res.status(200).json({ ok: true, message: "COMPANY UPDATED SUCCESSFULLY" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.deleteCompany = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCompany = await Company.destroy({ where: { id } });
        if (!deletedCompany) {
            return res.status(404).json({ ok: false, message: "COMPANY NOT FOUND" });
        }
        res.status(200).json({ ok: true, message: "COMPANY DELETED SUCCESSFULLY" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};