const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  craftsman: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  category: {
    type: String,
    enum: ['carpentry', 'welding', 'mechanics', 'electrical', 'plumbing', 'painting', 'other'],
    required: true
  },
  images: [String],
  basePrice: { type: Number, required: true },
  priceUnit: { type: String, enum: ['per_hour', 'per_day', 'per_project'], default: 'per_project' },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);
