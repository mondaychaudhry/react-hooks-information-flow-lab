function Header ({slap, crankle}) {
return(
<header>
    <h2>Shopster</h2>
    <button onClick={crankle}>
    {slap ? "Dark" : "Light"} Mode
    </button>
</header>)}

export default Header