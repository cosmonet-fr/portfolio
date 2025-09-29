<template>
    <div class="skill" @mouseover="hover = true" @mouseleave="hover = false">
        <div class="gaugeBox">
            <img :src="imgSrc" :alt="name" />
            <div class="gauge">
                <div :class="gaugeClass">
                    <p class="technology" v-if="hover">{{ name }}</p>
                </div>
            </div>
        </div>
        <div class="def">
            <transition name="slide-fade">
                <p v-if="hover">{{ description }}</p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        imgSrc: String,
        description: String,
        percentage: Number
    },
    data() {
        return {
            hover: false
        };
    },
    computed: {
        gaugeClass() {
            return `p${this.percentage}`;
        }
    }
};
</script>

<style scoped lang="scss">
.skill {
    margin-bottom: 3rem;

    @media (max-width: 800px) {
        margin-bottom: 4rem;
    }
}

.gaugeBox {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 800px) {
        width: 90%;
        
    }
}

.gauge,
.def {
    width: 30rem;

    @media (max-width: 800px) {
         width: 20rem;
    }
}

.gauge {
  margin: 0.5em 0;
  height: 2rem;
  background-color: gray;
}

@for $i from 0 through 100 {
  .p#{$i} {
    animation: gauge#{$i} 2s;
    width: #{$i + '%'};
    height: 2rem;
    background-color: #04617b;
  }

  @keyframes gauge#{$i} {
    0% { width: 0; }
    100% { width: #{$i + '%'}; }
  }
}


.technology {
    padding-left: 1em;
    padding-top: 0.5em;
    font-weight: bold;
}

.def {
    margin-left: 5rem;
    position: absolute;
    
    @media (max-width: 800px) {
        font-size: 12px;
        width: 65%;
        padding-left: 11px;
    }
}

img {
    margin: 0 1em;
    width: 2.5rem;
}

.ps {
    height: 2.5rem;
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
