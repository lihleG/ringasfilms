import React, { useState } from 'react';
import './ContactForm.css';
import { PopupModal } from 'react-calendly';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faTwitter, 
  faLinkedin, 
  faVimeoV 
} from '@fortawesome/free-brands-svg-icons';

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState('form');
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.project) newErrors.project = 'Project type is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                onClose();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setErrors({ submit: 'Failed to submit. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='form-overlay'>
            <div className='contact-form-container'>
                <button className='close-btn' onClick={onClose}>×</button>
                
                {/* Tab Navigation */}
                <div className="form-tabs">
                    <button
                        className={`tab-button ${activeTab === 'form' ? 'active' : ''}`}
                        onClick={() => setActiveTab('form')}
                    >
                        Send Message
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`}
                        onClick={() => setActiveTab('calendar')}
                    >
                        Book Meeting
                    </button>
                </div>

                {activeTab === 'form' ? (
                    <>
                        <h2>Let's create something Amazing</h2>
                        {errors.submit && (
                            <div className="error-message">{errors.submit}</div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input 
                                    type='text'
                                    placeholder='Your name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>
                            
                            <div className='form-group'>
                                <input 
                                    type='email'
                                    placeholder='Email Address'
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            
                            <div className='form-group'>
                                <select
                                    value={formData.project}
                                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                                    className={errors.project ? 'error' : ''}
                                >
                                    <option value="">Project Type</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="film">Feature Film</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="photography">Photography</option>
                                </select>
                                {errors.project && <span className="error-message">{errors.project}</span>}
                            </div>
                            
                            <div className="form-group">
                                <textarea
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className={errors.message ? 'error' : ''}
                                />
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>
                            
                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span> SENDING...
                                    </>
                                ) : (
                                    'SEND REQUEST'
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="calendly-tab">
                        <h2>Schedule a Consultation</h2>
                        <p>Book a time to discuss your project directly with our team.</p>
                        
                        <button 
                            className="calendly-button"
                            onClick={() => setIsCalendlyOpen(true)}
                        >
                            View Available Times
                        </button>

                        <PopupModal
                            url="https://calendly.com/your-username"
                            onModalClose={() => setIsCalendlyOpen(false)}
                            open={isCalendlyOpen}
                            rootElement={document.getElementById('root')}
                            pageSettings={{
                                backgroundColor: '1a1a1a',
                                primaryColor: 'ff6b00',
                                textColor: 'ffffff'
                            }}
                            prefill={{
                                name: formData.name,
                                email: formData.email,
                                customAnswers: {
                                    a1: formData.project || 'Not specified'
                                }
                            }}
                        />
                    </div>
                )}

                {/* Footer Section */}
                <footer className="contact-footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>Ringa Films</h4>
                            <p>47 Selbourne road, Johannesburg, South Africa</p>
                            <p>ringafilms@gmail.com</p>
                            <p>081 492 8010</p>
                        </div>

                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li>Film production</li>
                                <li>Commercials</li>
                                <li>Documentaries</li>
                                <li>Photography</li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <div className="social-links">
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://linkedin.com/company/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://vimeo.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
                                    <FontAwesomeIcon icon={faVimeoV} />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ContactForm;