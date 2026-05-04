import { useState } from "react";
const style = {
    header: {
        display: "flex",
        justifyContent: "flex-end"
        , alignItem: "center"
        , flexDirection: "row"
        , gap: "10px"
        , borderBottom: "1px solid gray"
        , padding: "10px"
    }
}
function Header() {
    return (
        <div style={style.header}>
            <header>header</header>
            <button className="btn btn-success">Mode</button>
        </div>
    )
}

export default Header;