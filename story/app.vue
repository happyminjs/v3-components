<template>
    <app-navigator defaultPath="normal/button">
        <article class="app-home">
            <section class="app-header" :style="{height:HomeConfig.headSize+'px',}">
                v3-component
            </section>
            <section class="app-menu" :style="{width:HomeConfig.menuSize+'px',top:HomeConfig.headSize+'px'}">
                <app-menu/>
            </section>
            <section class="app-content" :style="{
                paddingTop:(HomeConfig.headSize+20)+'px',
                paddingLeft:(HomeConfig.menuSize+20)+'px',
            }">
                <app-navigator-page/>
            </section>
        </article>
    </app-navigator>
</template>

<script>
    import {AppNavigator} from "./components/navigator/app-navigator";
    import {AppNavigatorPage} from "./components/navigator/app-navigator-page";
    import AppMenu from "./components/app/app-menu";

    const HomeConfig = {
        headSize: 60,
        menuSize: 300,
    }

    export default {
        components: {
            AppMenu,
            AppNavigator,
            AppNavigatorPage,
        },
        name: "app",
        data() {
            return {
                HomeConfig,
            }
        },
    }
</script>

<style lang="scss">

    html, body {
        margin: 0;
        padding: 0;
    }

    .app-home {
        .app-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;
            border-bottom: solid 1px #f2f2f2;
            background-color: white;
        }

        .app-menu {
            position: fixed;
            left: 0;
            bottom: 0;
            border-right: solid 1px #f2f2f2;
            background-color: white;
        }

        .app-content {
            min-height: 100vh;
            box-sizing: border-box;
        }
    }
</style>