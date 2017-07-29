<template>
  <div class="progress-bar" ref="progressBar" @click.stop.prevent="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress">
        <div class="progress-btn-wrapper" ref="progressBtn"
             @touchstart.prevent="progressTouchStart"
             @touchmove.prevent="progressTouchMove"
             @touchend.prevent="progressTouchEnd">
          <div class="progress-btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {prefixStyle} from '../../common/js/dom'
  const transform = prefixStyle('transform')
export default{
    props:{
        percent:{
            type:Number,
            default:0
        }
    },
  created(){
        this.touch = {}
  },
  watch:{
        percent(newPercent){
            if(newPercent>=0 && !this.touch.initiated){
                const barWidth = this.$refs.progressBar.clientWidth - 16;
                const offsetWidth = newPercent*barWidth;
                this._offsetWidth(offsetWidth);
            }
        }
  },
  methods:{
    progressTouchStart(e){
      this.touch.initiated = true;
      this.touch.startX=e.touches[0].pageX;
      this.touch.left=this.$refs.progress.clientWidth;
    },
    progressTouchMove(e){
      if(!this.touch.initiated){
          return
      }
      const deltaX = e.touches[0].pageX - this.touch.startX;
      const offsetWidth =Math.min(this.$refs.progressBar.clientWidth - 16, Math.max(0,this.touch.left+deltaX))
      this._offsetWidth(offsetWidth);
    },
    progressTouchEnd(){
      this.touch.initiated = false;
      this.triggerPercent();
    },
    triggerPercent(){
      const barWidth = this.$refs.progressBar.clientWidth - 16;
      const percent = this.$refs.progress.clientWidth/barWidth;
      this.$emit('percentChange',percent);
    },
    _offsetWidth(w){
      this.$refs.progress.style.width = `${w}px`
      this.$refs.progressBtn.style[transform] = `translate3d(${w}px,0,0)`
    },
    progressClick(e){
        this._offsetWidth(e.offsetX);
        this.triggerPercent();
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/variable.styl"
  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>
