import React from 'react';

const FindUsPage = () => {
    return (
        <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center w-full px-4">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold mb-6 text-center">Find Us</h1>
                <div className="bg-gray-900 rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                    <div className="iframe-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5688733408124!2d74.32394307574738!3d31.508532147726658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190464562b3131%3A0xa36221215e2ad4f9!2sPlot%2055%2C%20Garden%20Block%20Garden%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702851313315!5m2!1sen!2s"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p>Raja Market Ahmed Block, Lahore</p>
                        <p>Email: contact@texagon.io</p>
                        <p>Phone: +923174120910</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUsPage;
