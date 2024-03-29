const mongoose = require('mongoose');


const AnnouncementSchema = new mongoose.Schema({
    content: {type: String, required:true},
    timestamp: {type: Date, default: Date.now, required:true}
});

module.exports = mongoose.model('Announcement', AnnouncementSchema);