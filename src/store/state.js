/**
 * Created by Guo on 2017/7/27 0027.
 */
import {playMode} from '../common/js/config'
const state={
  singer:{},
  playing:false,
  fullScreen:false,
  playList:[],
  sequenceList:[],
  mode:playMode.sequence,
  currentIndex:-1
}

export default state;
