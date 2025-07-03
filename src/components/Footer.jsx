import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 border-top">
      <p className="mb-0">© {new Date().getFullYear()} TaskHive. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
