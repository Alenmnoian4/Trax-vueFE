<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/trax">Traxercise</router-link>

                </li>
                <li>
                    <router-link to="/new">Add a Traxercise</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 5rem;
    background-color: #A9907E;
}
nav {
    height: 100%;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
li {
    margin: 0 2rem;
}
a {
    text-decoration: none;
    background: transparent;
    border: 1px solid transparent;
    color: #F3DEBA;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
}
a:hover,
a:active,
a.active {
    color: #ABC4AA;
    border-color: #ABC4AA;
    background-color: #675D50;
}
</style>