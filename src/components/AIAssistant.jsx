import React, { useState } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m ZOVAi Assistant. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = { type: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);

    // Simple AI responses
    setTimeout(() => {
      let botResponse = '';
      const input = inputText.toLowerCase();
      
      if (input.includes('order') || input.includes('track')) {
        botResponse = 'You can track your orders in the "Your Orders" section. Need help with a specific order?';
      } else if (input.includes('return') || input.includes('refund')) {
        botResponse = 'Returns are easy! Go to Your Orders, select the item, and click "Return Item". Refunds are processed within 3-5 business days.';
      } else if (input.includes('shipping') || input.includes('delivery')) {
        botResponse = 'We offer FREE delivery on orders over ₹499. Prime members get FREE next-day delivery!';
      } else if (input.includes('payment') || input.includes('pay')) {
        botResponse = 'We accept all major credit cards, debit cards, UPI, and net banking. Your payment is 100% secure.';
      } else if (input.includes('discount') || input.includes('offer')) {
        botResponse = 'Check out our "Today\'s Deals" section for the best discounts! You can also find offers on the homepage.';
      } else {
        botResponse = 'I\'m here to help! You can ask me about orders, returns, shipping, payments, or product information.';
      }

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);

    setInputText('');
  };

  const quickActions = [
    'Track my order',
    'Return policy',
    'Shipping info',
    'Payment methods'
  ];

  return (
    <>
      <div className={`ai-assistant ${isOpen ? 'open' : ''}`}>
        <div className="assistant-header">
          <h3>🤖 ZOVAi Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
        </div>
        
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="quick-actions">
          {quickActions.map((action, index) => (
            <button 
              key={index}
              onClick={() => setInputText(action)}
              className="quick-action-btn"
            >
              {action}
            </button>
          ))}
        </div>

        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask me anything..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="send-btn">Send</button>
        </div>
      </div>

      <button 
        className="ai-assistant-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        🤖
      </button>
    </>
  );
};

export default AIAssistant;