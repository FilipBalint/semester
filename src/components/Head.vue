<template>
    <header class="header">
        <nav class="container">
            <ul class="nav">
                <li class="brand">
                    <p class="brand-text">FB-Streets</p>
                </li>
                <li v-for="link in links" :key="link.path">
                    <router-link :to="link.path" class="link">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Home', path: '/' },
                { name: 'Street Culture', path: '/street' },
                { name: 'Fits', path: '/fits' },
                { name: 'News', path: '/blog' },
                { name: 'New Releases', path: '/releases' },
                { name: 'O nás', path: '/aboutUs' },
            ],
        };
    },
};
</script>

<style scoped>
.header {
    background-color: #0327c9;
    padding: 25px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    list-style: none;
    display: flex;
    align-items: center;
}


.brand-text {
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding-right: 31em;
}

.link {
    padding: 16px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 10px;
    transition: background-color 0.3s, color 0.3s;
}

.link:hover {
    background-color: white;
    color: #584B53;
}
</style>
