<template>
    <div class="header">
        <div class="header-logo button">
            <img class="logo" :src="logo" />
            <img class="name" :src="name" v-show="!store.phone" />
        </div>
        <div v-if="!store.pad" class="header-tab">
            <button @click="tabClick('')">首页</button>
            <button @click="tabClick('')">历史项目</button>
            <button @click="tabClick('')">公司介绍</button>
            <button @click="tabClick('')">联系我们</button>
        </div>
        <div v-else class="header-tab-phone">
            <button class="header-tab-button" @click.stop="tabShow = !tabShow">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div class="header-tab-group">
                <Transition name="tab-a" mode="out-in"><button v-show="tabShow" @click="tabClick('')">首页</button></Transition>
                <Transition name="tab-b" mode="out-in"><button v-show="tabShow" @click="tabClick('')">历史项目</button></Transition>
                <Transition name="tab-c" mode="out-in"><button v-show="tabShow" @click="tabClick('')">公司介绍</button></Transition>
                <Transition name="tab-d" mode="out-in"><button v-show="tabShow" @click="tabClick('')">联系我们</button></Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'

const { proxy } = getCurrentInstance()
const { t } = useI18n()

const store = useStore()

const logo = new URL('@/assets/images/company/logo.png', import.meta.url).href
const name = new URL('@/assets/images/company/name.png', import.meta.url).href

const tabShow = ref(false)

function tabClick(tab) {
    tabShow.value = false
    console.log(tab)
}
document.documentElement.addEventListener('click', () => (tabShow.value = false))
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 150PX;
    padding: 0 100px;
    @include flex-center(center, space-between);

    .header-logo {
        cursor: pointer;
        gap: 20PX;
        @include flex-center();

        img {
            height: 60PX;
            margin: 25PX 0;
        }
    }

    .header-tab {
        gap: 20PX;
        @include flex-center();

        button {
            height: 66PX;
            padding: 0 18PX;
            font-size: 24PX;
            border-radius: 66PX;
            color: rgb(220, 220, 220);
            background: transparent;
            transition: all 0.2s;

            &:hover {
                padding: 0 36PX;
                letter-spacing: 1PX;
                color: white;
                background: rgb(60, 60, 60);
            }
        }
    }

    .header-tab-phone {
        position: relative;

        .header-tab-button {
            gap: 6PX;
            @include flex-center(center, normal, column);

            div {
                width: 32PX;
                height: 4PX;
                background: white;
            }
        }

        .header-tab-group {
            z-index: 10;
            position: absolute;
            right: 0;
            top: 180%;
            @include flex-center(flex-end, normal, column);

            button {
                padding: 10PX 5PX;
                font-size: 22PX;
                white-space: nowrap;
                color: white;
                text-shadow: 10PX 10PX 20PX black;
            }
        }
    }
}

@include setPhoneContent {
    .header {
        min-width: 300PX;
        height: 72PX;
        padding: 0 20PX;

        .header-logo {

            img {
                height: 40PX;
                margin: 0;
            }
        }

        .header-tab-phone {
            .header-tab-button {
                gap: 5PX;

                div {
                    width: 24PX;
                    height: 3PX;
                    background: white;
                }
            }

            .header-tab-group {
                button {
                    font-size: 18PX;
                }
            }
        }
    }
}
.tab-a-enter-active,
.tab-d-leave-active {
    transition: all 0.15s ease;
}
.tab-b-enter-active,
.tab-c-leave-active {
    transition: all 0.3s ease;
}
.tab-c-enter-active,
.tab-b-leave-active {
    transition: all 0.45s ease;
}
.tab-d-enter-active,
.tab-a-leave-active {
    transition: all 0.6s ease;
}
.tab-a-enter-from {
    opacity: 0;
    transform: translateY(-50%);
}
.tab-b-enter-from {
    opacity: 0;
    transform: translateY(-100%);
}
.tab-c-enter-from {
    opacity: 0;
    transform: translateY(-150%);
}
.tab-d-enter-from {
    opacity: 0;
    transform: translateY(-200%);
}
.tab-a-leave-to{
    opacity: 0;
    transform: translateY(-40%);
}
.tab-b-leave-to {
    opacity: 0;
    transform: translateY(-80%);
}
.tab-c-leave-to {
    opacity: 0;
    transform: translateY(-120%);
}
.tab-d-leave-to {
    opacity: 0;
    transform: translateY(-160%);
}
</style>
