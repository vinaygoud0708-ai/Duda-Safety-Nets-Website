import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, createWhatsAppLink } from '../data/companyData';
import { Send, CheckCircle, Phone, Calendar, MapPin, User, MessageSquare, Sparkles } from 'lucide-react';

export default function LeadForm({ id = "quote-form" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    propertyType: 'Apartment Balcony',
    netType: 'Garware Balcony Safety Net',
    preferredTime: 'Morning (9 AM - 12 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    // Format WhatsApp message
    const msg =
      `*NEW DOORSTEP INSPECTION REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Customer Name:* ${formData.name || 'Not Provided'}\n` +
      `📞 *Phone Number:* ${formData.phone || 'Not Provided'}\n` +
      `📍 *Bangalore Locality:* ${formData.area || 'Not Provided'}\n` +
      `🏢 *Property Type:* ${formData.propertyType}\n` +
      `🛡️ *Net Required:* ${formData.netType}\n` +
      `⏰ *Preferred Time:* ${formData.preferredTime}\n` +
      `📝 *Notes:* ${formData.notes || 'None'}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent from Dúda Safety Nets 3D Website_`;

    setSubmitted(true);

    // Open WhatsApp
    window.open(createWhatsAppLink(msg), '_blank');
  };

  return (
    <section id={id} className="py-20 relative bg-slate-950/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl shadow-cyan-950/20">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free Doorstep Survey</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Book a Free Site Visit &amp; Laser Measurement
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Our safety net engineer will visit your Bangalore address within 2 hours with genuine material samples and give an exact on-spot estimate.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Request Dispatched to WhatsApp!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Our field manager has received your location details and will call back to confirm your arrival window.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 text-xs font-semibold border border-cyan-500/30"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name (No example placeholder as requested) */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Phone Number (No example placeholder) */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mobile Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder=""
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-transparent focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Area in Bangalore (No example placeholder) */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Bangalore Locality / Area *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder=""
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-transparent focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Apartment Balcony">Apartment Balcony</option>
                    <option value="Independent House / Villa">Independent House / Villa</option>
                    <option value="Commercial High-Rise">Commercial High-Rise / Office</option>
                    <option value="Sports Turf / Cricket Cage">Sports Turf / Cricket Cage</option>
                    <option value="Factory / Industrial Warehouse">Factory / Industrial Warehouse</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Net Type */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                    Required Safety Solution
                  </label>
                  <select
                    value={formData.netType}
                    onChange={(e) => setFormData({ ...formData, netType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Garware Balcony Safety Net">Garware Balcony Safety Net</option>
                    <option value="Pigeon Safety Net">Pigeon Safety Net</option>
                    <option value="Children Fall Safety Net">Children Fall Safety Net</option>
                    <option value="SS 316 Invisible Grills">SS 316 Invisible Grills</option>
                    <option value="Cricket Practice Net">Cricket Practice Net</option>
                    <option value="Duct Area Covering Net">Duct Area Covering Net</option>
                    <option value="Whole House Covering Net">Whole House Covering Net</option>
                    <option value="Monkey Protection Net">Monkey Protection Net</option>
                    <option value="Bird Spikes">Bird Spikes</option>
                    <option value="Pet / Cat Safety Net">Pet / Cat Safety Net</option>
                    <option value="Staircase & Terrace Net">Staircase & Terrace Net</option>
                    <option value="Anti-Bird & Shade Net">Anti-Bird & Shade Net</option>
                  </select>
                </div>

                {/* Preferred Inspection Time */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Preferred Visit Timing</span>
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Within 2 Hours (Urgent)">Within 2 Hours (Immediate)</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    <option value="Weekend (Saturday / Sunday)">Weekend (Saturday / Sunday)</option>
                  </select>
                </div>
              </div>

              {/* Notes (No example placeholder) */}
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                  <span>Specific Requirements / Balcony Count (Optional)</span>
                </label>
                <textarea
                  rows="2"
                  placeholder=""
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Free Site Visit on WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
