<template>
    <div class="_progress">
        <div class="_box">
            <div class="_radian"></div>
        </div>
        <div class="_box">
            <div class="_circle">
                <span class="s1 imuiColor">{{value}}%</span>
                <span class="s2 imuiColor">正在查询</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    ._progress {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);

        ._box {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        ._radian {
            background: url('../../res/_icon_radian.png') no-repeat;
            width: 6rem;
            height: 6rem;
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-animation: rotate 500ms linear infinite;
            animation: rotate 500ms linear infinite;
        }

        ._circle {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 3.5rem;
            background-color: #ffffff;
            text-align: center;

            .s1 {
                font-size: 0.64rem;
                color: #fe952c;
                display: block;
                margin-top: 0.9rem;
            }
            .s2 {
                font-size: 0.43rem;
                color: #fe952c;
                display: block;
                margin-top: 0.13rem;
            }
        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>
