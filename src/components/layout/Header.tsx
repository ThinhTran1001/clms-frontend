import React from 'react';

export default function Header() {
    const headerStyle: React.CSSProperties = {
        backgroundColor: "#BC9F8B",
    }
    return (
        <header className="flex-row header text-white p-3" style={headerStyle}>
            <nav className="navbar navbar-expand-lg navbar-dark container-fluid p-3">
                <a className="navbar-brand" href="/">
                    <h2>CLMSby3LUA</h2>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login"><h5>Đăng Nhập</h5></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
