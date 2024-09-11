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
}

.gauge,
.def {
    width: 30rem;

    @media (max-width: 800px) {
        width: 10rem;
    }
}

.gauge {
    margin: 0.5em 0;
    height: 2rem;
    background-color: gray;
}
  .p15 {
      animation: gauge15 2s;
      width: 15%;
      height: 2rem;
      background-color: #04617b;
  }

  .p25 {
      animation: gauge25 2s;
      width: 25%;
      height: 2rem;
      background-color: #04617b;
  }

  .p35 {
      animation: gauge35 2s;
      width: 35%;
      height: 2rem;
      background-color: #04617b;
  }

  .p50 {
      animation: gauge50 2s;
      width: 50%;
      height: 2rem;
      background-color: #04617b;
  }

  .p65 {
      animation: gauge65 2s;
      width: 65%;
      height: 2rem;
      background-color: #04617b;
  }

  .p75 {
      animation: gauge75 2s;
      width: 75%;
      height: 2rem;
      background-color: #04617b;
  }

  .p90 {
      animation: gauge90 2s;
      width: 90%;
      height: 2rem;
      background-color: #04617b;
  }
  @keyframes gauge15 {
      0% {
          width: 0;
      }

      100% {
          width: 15%;
      }
  }

  @keyframes gauge25 {
      0% {
          width: 0;
      }

      100% {
          width: 25%;
      }
  }

  @keyframes gauge35 {
      0% {
          width: 0;
      }

      100% {
          width: 35%;
      }
  }

  @keyframes gauge50 {
      0% {
          width: 0;
      }

      100% {
          width: 50%;
      }
  }

  @keyframes gauge65 {
      0% {
          width: 0;
      }

      100% {
          width: 65%;
      }
  }

  @keyframes gauge75 {
      0% {
          width: 0;
      }

      100% {
          width: 75%;
      }
  }

  @keyframes gauge90 {
      0% {
          width: 0;
      }

      100% {
          width: 90%;
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
        font-size: 11px;
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
