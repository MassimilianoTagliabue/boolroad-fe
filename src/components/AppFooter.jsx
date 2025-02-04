function AppFooter() {
    return (
        <>
            <footer className="bg-color-nav text-white fs-5 px-3 py-2">
                <div className="d-flex justify-content-between align-items-end"> 
                    <div className="name">
                        <h4 className="m-0">Boolroad</h4> 
                    </div>

                    <div className="email">
                        <p className="m-0">info@company.com</p> 
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center"> 
                    <div className="copy">
                        <p>© 2021-2022 Blocklayouts™. All Rights Reserved.</p>
                    </div>

                    <div className="policy d-flex gap-3">
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms & Conditions</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default AppFooter;