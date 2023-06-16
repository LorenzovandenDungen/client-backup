 
import React, { useState } from 'react';

const EmployeeLogin = () => {
    const [inviteCode, setInviteCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call your API to log the employee in with their invite code
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Invite Code:
                <input type="text" value={inviteCode} onChange={e => setInviteCode(e.target.value)} required />
            </label>
            <button type="submit">Log in</button>
        </form>
    );
};

export default EmployeeLogin;
