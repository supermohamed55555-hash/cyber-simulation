const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views'))); // Serving HTML files from views

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Phishing Route Simulation Example (POST)
app.post('/api/phishing', (req, res) => {
    const { email, password } = req.body;
    console.log(`[SIMULATION] Captured credentials: Email: ${email}, Password: ${password}`);
    // Respond with success to simulate data capture
    res.status(200).json({ success: true, message: 'Data captured for simulation' });
});

// SQL Injection Route Simulation (POST)
app.post('/api/sql-injection', (req, res) => {
    const { query } = req.body;
    
    // Simulate a vulnerable database search
    console.log(`[SIMULATION] Executing Vulnerable Search: SELECT * FROM users WHERE name = '${query}'`);
    
    // Check if the query contains common SQLi patterns
    const isExploited = query.includes("' OR '1'='1") || query.includes("'--");
    
    if (isExploited) {
        res.status(200).json({
            success: true,
            exploited: true,
            data: [
                { id: 1, username: 'admin', balance: '$1,000,000' },
                { id: 2, username: 'ceo_mike', balance: '$5,000,000' },
                { id: 3, username: 'manager_sarah', balance: '$25,000' }
            ],
            message: 'DATABASE ERROR: Input bypassed validation. Unauthorized data returned.'
        });
    } else {
        res.status(200).json({
            success: true,
            exploited: false,
            data: [],
            message: 'No records found matching your search term.'
        });
    }
});

// Brute Force Route Simulation (POST)
app.post('/api/brute-force', (req, res) => {
    const { password } = req.body;
    const CORRECT_PASSWORD = 'password123';
    
    // Simulate a delay to show that brute force takes time
    setTimeout(() => {
        if (password === CORRECT_PASSWORD) {
            res.status(200).json({ success: true, message: 'Correct Password Found! ACCESS GRANTED.' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid Password. Access Denied.' });
        }
    }, 100); // 100ms artificial delay for the simulation
});

// Start server
app.listen(PORT, () => {
    console.log(`[OK] Server running on http://localhost:${PORT}`);
    console.log(`[INFO] Modern Dark Mode Simulation Platform is active.`);
});
