/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 204.0, "minX": 0.0, "maxY": 25454.0, "series": [{"data": [[0.0, 204.0], [0.1, 204.0], [0.2, 204.0], [0.3, 204.0], [0.4, 204.0], [0.5, 204.0], [0.6, 204.0], [0.7, 204.0], [0.8, 204.0], [0.9, 204.0], [1.0, 205.0], [1.1, 205.0], [1.2, 205.0], [1.3, 205.0], [1.4, 205.0], [1.5, 205.0], [1.6, 205.0], [1.7, 205.0], [1.8, 205.0], [1.9, 205.0], [2.0, 205.0], [2.1, 205.0], [2.2, 205.0], [2.3, 205.0], [2.4, 205.0], [2.5, 205.0], [2.6, 205.0], [2.7, 205.0], [2.8, 205.0], [2.9, 205.0], [3.0, 205.0], [3.1, 205.0], [3.2, 205.0], [3.3, 205.0], [3.4, 205.0], [3.5, 205.0], [3.6, 205.0], [3.7, 205.0], [3.8, 205.0], [3.9, 205.0], [4.0, 207.0], [4.1, 207.0], [4.2, 207.0], [4.3, 207.0], [4.4, 207.0], [4.5, 207.0], [4.6, 207.0], [4.7, 207.0], [4.8, 207.0], [4.9, 207.0], [5.0, 207.0], [5.1, 207.0], [5.2, 207.0], [5.3, 207.0], [5.4, 207.0], [5.5, 207.0], [5.6, 207.0], [5.7, 207.0], [5.8, 207.0], [5.9, 207.0], [6.0, 207.0], [6.1, 207.0], [6.2, 207.0], [6.3, 207.0], [6.4, 207.0], [6.5, 207.0], [6.6, 207.0], [6.7, 207.0], [6.8, 207.0], [6.9, 207.0], [7.0, 208.0], [7.1, 208.0], [7.2, 208.0], [7.3, 208.0], [7.4, 208.0], [7.5, 208.0], [7.6, 208.0], [7.7, 208.0], [7.8, 208.0], [7.9, 208.0], [8.0, 208.0], [8.1, 208.0], [8.2, 208.0], [8.3, 208.0], [8.4, 208.0], [8.5, 208.0], [8.6, 208.0], [8.7, 208.0], [8.8, 208.0], [8.9, 208.0], [9.0, 208.0], [9.1, 208.0], [9.2, 208.0], [9.3, 208.0], [9.4, 208.0], [9.5, 208.0], [9.6, 208.0], [9.7, 208.0], [9.8, 208.0], [9.9, 208.0], [10.0, 209.0], [10.1, 209.0], [10.2, 209.0], [10.3, 209.0], [10.4, 209.0], [10.5, 209.0], [10.6, 209.0], [10.7, 209.0], [10.8, 209.0], [10.9, 209.0], [11.0, 209.0], [11.1, 209.0], [11.2, 209.0], [11.3, 209.0], [11.4, 209.0], [11.5, 209.0], [11.6, 209.0], [11.7, 209.0], [11.8, 209.0], [11.9, 209.0], [12.0, 209.0], [12.1, 209.0], [12.2, 209.0], [12.3, 209.0], [12.4, 209.0], [12.5, 209.0], [12.6, 209.0], [12.7, 209.0], [12.8, 209.0], [12.9, 209.0], [13.0, 209.0], [13.1, 209.0], [13.2, 209.0], [13.3, 209.0], [13.4, 209.0], [13.5, 209.0], [13.6, 209.0], [13.7, 209.0], [13.8, 209.0], [13.9, 209.0], [14.0, 209.0], [14.1, 209.0], [14.2, 209.0], [14.3, 209.0], [14.4, 209.0], [14.5, 209.0], [14.6, 209.0], [14.7, 209.0], [14.8, 209.0], [14.9, 209.0], [15.0, 210.0], [15.1, 210.0], [15.2, 210.0], [15.3, 210.0], [15.4, 210.0], [15.5, 210.0], [15.6, 210.0], [15.7, 210.0], [15.8, 210.0], [15.9, 210.0], [16.0, 210.0], [16.1, 210.0], [16.2, 210.0], [16.3, 210.0], [16.4, 210.0], [16.5, 210.0], [16.6, 210.0], [16.7, 210.0], [16.8, 210.0], [16.9, 210.0], [17.0, 211.0], [17.1, 211.0], [17.2, 211.0], [17.3, 211.0], [17.4, 211.0], [17.5, 211.0], [17.6, 211.0], [17.7, 211.0], [17.8, 211.0], [17.9, 211.0], [18.0, 211.0], [18.1, 211.0], [18.2, 211.0], [18.3, 211.0], [18.4, 211.0], [18.5, 211.0], [18.6, 211.0], [18.7, 211.0], [18.8, 211.0], [18.9, 211.0], [19.0, 211.0], [19.1, 211.0], [19.2, 211.0], [19.3, 211.0], [19.4, 211.0], [19.5, 211.0], [19.6, 211.0], [19.7, 211.0], [19.8, 211.0], [19.9, 211.0], [20.0, 212.0], [20.1, 212.0], [20.2, 212.0], [20.3, 212.0], [20.4, 212.0], [20.5, 212.0], [20.6, 212.0], [20.7, 212.0], [20.8, 212.0], [20.9, 212.0], [21.0, 212.0], [21.1, 212.0], [21.2, 212.0], [21.3, 212.0], [21.4, 212.0], [21.5, 212.0], [21.6, 212.0], [21.7, 212.0], [21.8, 212.0], [21.9, 212.0], [22.0, 213.0], [22.1, 213.0], [22.2, 213.0], [22.3, 213.0], [22.4, 213.0], [22.5, 213.0], [22.6, 213.0], [22.7, 213.0], [22.8, 213.0], [22.9, 213.0], [23.0, 213.0], [23.1, 213.0], [23.2, 213.0], [23.3, 213.0], [23.4, 213.0], [23.5, 213.0], [23.6, 213.0], [23.7, 213.0], [23.8, 213.0], [23.9, 213.0], [24.0, 213.0], [24.1, 213.0], [24.2, 213.0], [24.3, 213.0], [24.4, 213.0], [24.5, 213.0], [24.6, 213.0], [24.7, 213.0], [24.8, 213.0], [24.9, 213.0], [25.0, 213.0], [25.1, 213.0], [25.2, 213.0], [25.3, 213.0], [25.4, 213.0], [25.5, 213.0], [25.6, 213.0], [25.7, 213.0], [25.8, 213.0], [25.9, 213.0], [26.0, 213.0], [26.1, 213.0], [26.2, 213.0], [26.3, 213.0], [26.4, 213.0], [26.5, 213.0], [26.6, 213.0], [26.7, 213.0], [26.8, 213.0], [26.9, 213.0], [27.0, 213.0], [27.1, 213.0], [27.2, 213.0], [27.3, 213.0], [27.4, 213.0], [27.5, 213.0], [27.6, 213.0], [27.7, 213.0], [27.8, 213.0], [27.9, 213.0], [28.0, 214.0], [28.1, 214.0], [28.2, 214.0], [28.3, 214.0], [28.4, 214.0], [28.5, 214.0], [28.6, 214.0], [28.7, 214.0], [28.8, 214.0], [28.9, 214.0], [29.0, 214.0], [29.1, 214.0], [29.2, 214.0], [29.3, 214.0], [29.4, 214.0], [29.5, 214.0], [29.6, 214.0], [29.7, 214.0], [29.8, 214.0], [29.9, 214.0], [30.0, 214.0], [30.1, 214.0], [30.2, 214.0], [30.3, 214.0], [30.4, 214.0], [30.5, 214.0], [30.6, 214.0], [30.7, 214.0], [30.8, 214.0], [30.9, 214.0], [31.0, 215.0], [31.1, 215.0], [31.2, 215.0], [31.3, 215.0], [31.4, 215.0], [31.5, 215.0], [31.6, 215.0], [31.7, 215.0], [31.8, 215.0], [31.9, 215.0], [32.0, 215.0], [32.1, 215.0], [32.2, 215.0], [32.3, 215.0], [32.4, 215.0], [32.5, 215.0], [32.6, 215.0], [32.7, 215.0], [32.8, 215.0], [32.9, 215.0], [33.0, 215.0], [33.1, 215.0], [33.2, 215.0], [33.3, 215.0], [33.4, 215.0], [33.5, 215.0], [33.6, 215.0], [33.7, 215.0], [33.8, 215.0], [33.9, 215.0], [34.0, 216.0], [34.1, 216.0], [34.2, 216.0], [34.3, 216.0], [34.4, 216.0], [34.5, 216.0], [34.6, 216.0], [34.7, 216.0], [34.8, 216.0], [34.9, 216.0], [35.0, 216.0], [35.1, 216.0], [35.2, 216.0], [35.3, 216.0], [35.4, 216.0], [35.5, 216.0], [35.6, 216.0], [35.7, 216.0], [35.8, 216.0], [35.9, 216.0], [36.0, 216.0], [36.1, 216.0], [36.2, 216.0], [36.3, 216.0], [36.4, 216.0], [36.5, 216.0], [36.6, 216.0], [36.7, 216.0], [36.8, 216.0], [36.9, 216.0], [37.0, 216.0], [37.1, 216.0], [37.2, 216.0], [37.3, 216.0], [37.4, 216.0], [37.5, 216.0], [37.6, 216.0], [37.7, 216.0], [37.8, 216.0], [37.9, 216.0], [38.0, 217.0], [38.1, 217.0], [38.2, 217.0], [38.3, 217.0], [38.4, 217.0], [38.5, 217.0], [38.6, 217.0], [38.7, 217.0], [38.8, 217.0], [38.9, 217.0], [39.0, 217.0], [39.1, 217.0], [39.2, 217.0], [39.3, 217.0], [39.4, 217.0], [39.5, 217.0], [39.6, 217.0], [39.7, 217.0], [39.8, 217.0], [39.9, 217.0], [40.0, 217.0], [40.1, 217.0], [40.2, 217.0], [40.3, 217.0], [40.4, 217.0], [40.5, 217.0], [40.6, 217.0], [40.7, 217.0], [40.8, 217.0], [40.9, 217.0], [41.0, 218.0], [41.1, 218.0], [41.2, 218.0], [41.3, 218.0], [41.4, 218.0], [41.5, 218.0], [41.6, 218.0], [41.7, 218.0], [41.8, 218.0], [41.9, 218.0], [42.0, 218.0], [42.1, 218.0], [42.2, 218.0], [42.3, 218.0], [42.4, 218.0], [42.5, 218.0], [42.6, 218.0], [42.7, 218.0], [42.8, 218.0], [42.9, 218.0], [43.0, 218.0], [43.1, 218.0], [43.2, 218.0], [43.3, 218.0], [43.4, 218.0], [43.5, 218.0], [43.6, 218.0], [43.7, 218.0], [43.8, 218.0], [43.9, 218.0], [44.0, 218.0], [44.1, 218.0], [44.2, 218.0], [44.3, 218.0], [44.4, 218.0], [44.5, 218.0], [44.6, 218.0], [44.7, 218.0], [44.8, 218.0], [44.9, 218.0], [45.0, 219.0], [45.1, 219.0], [45.2, 219.0], [45.3, 219.0], [45.4, 219.0], [45.5, 219.0], [45.6, 219.0], [45.7, 219.0], [45.8, 219.0], [45.9, 219.0], [46.0, 220.0], [46.1, 220.0], [46.2, 220.0], [46.3, 220.0], [46.4, 220.0], [46.5, 220.0], [46.6, 220.0], [46.7, 220.0], [46.8, 220.0], [46.9, 220.0], [47.0, 220.0], [47.1, 220.0], [47.2, 220.0], [47.3, 220.0], [47.4, 220.0], [47.5, 220.0], [47.6, 220.0], [47.7, 220.0], [47.8, 220.0], [47.9, 220.0], [48.0, 220.0], [48.1, 220.0], [48.2, 220.0], [48.3, 220.0], [48.4, 220.0], [48.5, 220.0], [48.6, 220.0], [48.7, 220.0], [48.8, 220.0], [48.9, 220.0], [49.0, 221.0], [49.1, 221.0], [49.2, 221.0], [49.3, 221.0], [49.4, 221.0], [49.5, 221.0], [49.6, 221.0], [49.7, 221.0], [49.8, 221.0], [49.9, 221.0], [50.0, 222.0], [50.1, 222.0], [50.2, 222.0], [50.3, 222.0], [50.4, 222.0], [50.5, 222.0], [50.6, 222.0], [50.7, 222.0], [50.8, 222.0], [50.9, 222.0], [51.0, 222.0], [51.1, 222.0], [51.2, 222.0], [51.3, 222.0], [51.4, 222.0], [51.5, 222.0], [51.6, 222.0], [51.7, 222.0], [51.8, 222.0], [51.9, 222.0], [52.0, 222.0], [52.1, 222.0], [52.2, 222.0], [52.3, 222.0], [52.4, 222.0], [52.5, 222.0], [52.6, 222.0], [52.7, 222.0], [52.8, 222.0], [52.9, 222.0], [53.0, 223.0], [53.1, 223.0], [53.2, 223.0], [53.3, 223.0], [53.4, 223.0], [53.5, 223.0], [53.6, 223.0], [53.7, 223.0], [53.8, 223.0], [53.9, 223.0], [54.0, 223.0], [54.1, 223.0], [54.2, 223.0], [54.3, 223.0], [54.4, 223.0], [54.5, 223.0], [54.6, 223.0], [54.7, 223.0], [54.8, 223.0], [54.9, 223.0], [55.0, 224.0], [55.1, 224.0], [55.2, 224.0], [55.3, 224.0], [55.4, 224.0], [55.5, 224.0], [55.6, 224.0], [55.7, 224.0], [55.8, 224.0], [55.9, 224.0], [56.0, 224.0], [56.1, 224.0], [56.2, 224.0], [56.3, 224.0], [56.4, 224.0], [56.5, 224.0], [56.6, 224.0], [56.7, 224.0], [56.8, 224.0], [56.9, 224.0], [57.0, 227.0], [57.1, 227.0], [57.2, 227.0], [57.3, 227.0], [57.4, 227.0], [57.5, 227.0], [57.6, 227.0], [57.7, 227.0], [57.8, 227.0], [57.9, 227.0], [58.0, 232.0], [58.1, 232.0], [58.2, 232.0], [58.3, 232.0], [58.4, 232.0], [58.5, 232.0], [58.6, 232.0], [58.7, 232.0], [58.8, 232.0], [58.9, 232.0], [59.0, 236.0], [59.1, 236.0], [59.2, 236.0], [59.3, 236.0], [59.4, 236.0], [59.5, 236.0], [59.6, 236.0], [59.7, 236.0], [59.8, 236.0], [59.9, 236.0], [60.0, 241.0], [60.1, 241.0], [60.2, 241.0], [60.3, 241.0], [60.4, 241.0], [60.5, 241.0], [60.6, 241.0], [60.7, 241.0], [60.8, 241.0], [60.9, 241.0], [61.0, 277.0], [61.1, 277.0], [61.2, 277.0], [61.3, 277.0], [61.4, 277.0], [61.5, 277.0], [61.6, 277.0], [61.7, 277.0], [61.8, 277.0], [61.9, 277.0], [62.0, 279.0], [62.1, 279.0], [62.2, 279.0], [62.3, 279.0], [62.4, 279.0], [62.5, 279.0], [62.6, 279.0], [62.7, 279.0], [62.8, 279.0], [62.9, 279.0], [63.0, 279.0], [63.1, 279.0], [63.2, 279.0], [63.3, 279.0], [63.4, 279.0], [63.5, 279.0], [63.6, 279.0], [63.7, 279.0], [63.8, 279.0], [63.9, 279.0], [64.0, 315.0], [64.1, 315.0], [64.2, 315.0], [64.3, 315.0], [64.4, 315.0], [64.5, 315.0], [64.6, 315.0], [64.7, 315.0], [64.8, 315.0], [64.9, 315.0], [65.0, 322.0], [65.1, 322.0], [65.2, 322.0], [65.3, 322.0], [65.4, 322.0], [65.5, 322.0], [65.6, 322.0], [65.7, 322.0], [65.8, 322.0], [65.9, 322.0], [66.0, 338.0], [66.1, 338.0], [66.2, 338.0], [66.3, 338.0], [66.4, 338.0], [66.5, 338.0], [66.6, 338.0], [66.7, 338.0], [66.8, 338.0], [66.9, 338.0], [67.0, 350.0], [67.1, 350.0], [67.2, 350.0], [67.3, 350.0], [67.4, 350.0], [67.5, 350.0], [67.6, 350.0], [67.7, 350.0], [67.8, 350.0], [67.9, 350.0], [68.0, 358.0], [68.1, 358.0], [68.2, 358.0], [68.3, 358.0], [68.4, 358.0], [68.5, 358.0], [68.6, 358.0], [68.7, 358.0], [68.8, 358.0], [68.9, 358.0], [69.0, 388.0], [69.1, 388.0], [69.2, 388.0], [69.3, 388.0], [69.4, 388.0], [69.5, 388.0], [69.6, 388.0], [69.7, 388.0], [69.8, 388.0], [69.9, 388.0], [70.0, 23085.0], [70.1, 23085.0], [70.2, 23085.0], [70.3, 23085.0], [70.4, 23085.0], [70.5, 23085.0], [70.6, 23085.0], [70.7, 23085.0], [70.8, 23085.0], [70.9, 23085.0], [71.0, 23176.0], [71.1, 23176.0], [71.2, 23176.0], [71.3, 23176.0], [71.4, 23176.0], [71.5, 23176.0], [71.6, 23176.0], [71.7, 23176.0], [71.8, 23176.0], [71.9, 23176.0], [72.0, 23253.0], [72.1, 23253.0], [72.2, 23253.0], [72.3, 23253.0], [72.4, 23253.0], [72.5, 23253.0], [72.6, 23253.0], [72.7, 23253.0], [72.8, 23253.0], [72.9, 23253.0], [73.0, 23371.0], [73.1, 23371.0], [73.2, 23371.0], [73.3, 23371.0], [73.4, 23371.0], [73.5, 23371.0], [73.6, 23371.0], [73.7, 23371.0], [73.8, 23371.0], [73.9, 23371.0], [74.0, 23493.0], [74.1, 23493.0], [74.2, 23493.0], [74.3, 23493.0], [74.4, 23493.0], [74.5, 23493.0], [74.6, 23493.0], [74.7, 23493.0], [74.8, 23493.0], [74.9, 23493.0], [75.0, 23499.0], [75.1, 23499.0], [75.2, 23499.0], [75.3, 23499.0], [75.4, 23499.0], [75.5, 23499.0], [75.6, 23499.0], [75.7, 23499.0], [75.8, 23499.0], [75.9, 23499.0], [76.0, 23625.0], [76.1, 23625.0], [76.2, 23625.0], [76.3, 23625.0], [76.4, 23625.0], [76.5, 23625.0], [76.6, 23625.0], [76.7, 23625.0], [76.8, 23625.0], [76.9, 23625.0], [77.0, 23684.0], [77.1, 23684.0], [77.2, 23684.0], [77.3, 23684.0], [77.4, 23684.0], [77.5, 23684.0], [77.6, 23684.0], [77.7, 23684.0], [77.8, 23684.0], [77.9, 23684.0], [78.0, 23719.0], [78.1, 23719.0], [78.2, 23719.0], [78.3, 23719.0], [78.4, 23719.0], [78.5, 23719.0], [78.6, 23719.0], [78.7, 23719.0], [78.8, 23719.0], [78.9, 23719.0], [79.0, 23771.0], [79.1, 23771.0], [79.2, 23771.0], [79.3, 23771.0], [79.4, 23771.0], [79.5, 23771.0], [79.6, 23771.0], [79.7, 23771.0], [79.8, 23771.0], [79.9, 23771.0], [80.0, 23776.0], [80.1, 23776.0], [80.2, 23776.0], [80.3, 23776.0], [80.4, 23776.0], [80.5, 23776.0], [80.6, 23776.0], [80.7, 23776.0], [80.8, 23776.0], [80.9, 23776.0], [81.0, 23853.0], [81.1, 23853.0], [81.2, 23853.0], [81.3, 23853.0], [81.4, 23853.0], [81.5, 23853.0], [81.6, 23853.0], [81.7, 23853.0], [81.8, 23853.0], [81.9, 23853.0], [82.0, 23924.0], [82.1, 23924.0], [82.2, 23924.0], [82.3, 23924.0], [82.4, 23924.0], [82.5, 23924.0], [82.6, 23924.0], [82.7, 23924.0], [82.8, 23924.0], [82.9, 23924.0], [83.0, 23975.0], [83.1, 23975.0], [83.2, 23975.0], [83.3, 23975.0], [83.4, 23975.0], [83.5, 23975.0], [83.6, 23975.0], [83.7, 23975.0], [83.8, 23975.0], [83.9, 23975.0], [84.0, 24018.0], [84.1, 24018.0], [84.2, 24018.0], [84.3, 24018.0], [84.4, 24018.0], [84.5, 24018.0], [84.6, 24018.0], [84.7, 24018.0], [84.8, 24018.0], [84.9, 24018.0], [85.0, 24118.0], [85.1, 24118.0], [85.2, 24118.0], [85.3, 24118.0], [85.4, 24118.0], [85.5, 24118.0], [85.6, 24118.0], [85.7, 24118.0], [85.8, 24118.0], [85.9, 24118.0], [86.0, 24219.0], [86.1, 24219.0], [86.2, 24219.0], [86.3, 24219.0], [86.4, 24219.0], [86.5, 24219.0], [86.6, 24219.0], [86.7, 24219.0], [86.8, 24219.0], [86.9, 24219.0], [87.0, 24324.0], [87.1, 24324.0], [87.2, 24324.0], [87.3, 24324.0], [87.4, 24324.0], [87.5, 24324.0], [87.6, 24324.0], [87.7, 24324.0], [87.8, 24324.0], [87.9, 24324.0], [88.0, 24362.0], [88.1, 24362.0], [88.2, 24362.0], [88.3, 24362.0], [88.4, 24362.0], [88.5, 24362.0], [88.6, 24362.0], [88.7, 24362.0], [88.8, 24362.0], [88.9, 24362.0], [89.0, 24524.0], [89.1, 24524.0], [89.2, 24524.0], [89.3, 24524.0], [89.4, 24524.0], [89.5, 24524.0], [89.6, 24524.0], [89.7, 24524.0], [89.8, 24524.0], [89.9, 24524.0], [90.0, 24604.0], [90.1, 24604.0], [90.2, 24604.0], [90.3, 24604.0], [90.4, 24604.0], [90.5, 24604.0], [90.6, 24604.0], [90.7, 24604.0], [90.8, 24604.0], [90.9, 24604.0], [91.0, 24685.0], [91.1, 24685.0], [91.2, 24685.0], [91.3, 24685.0], [91.4, 24685.0], [91.5, 24685.0], [91.6, 24685.0], [91.7, 24685.0], [91.8, 24685.0], [91.9, 24685.0], [92.0, 24794.0], [92.1, 24794.0], [92.2, 24794.0], [92.3, 24794.0], [92.4, 24794.0], [92.5, 24794.0], [92.6, 24794.0], [92.7, 24794.0], [92.8, 24794.0], [92.9, 24794.0], [93.0, 24898.0], [93.1, 24898.0], [93.2, 24898.0], [93.3, 24898.0], [93.4, 24898.0], [93.5, 24898.0], [93.6, 24898.0], [93.7, 24898.0], [93.8, 24898.0], [93.9, 24898.0], [94.0, 24961.0], [94.1, 24961.0], [94.2, 24961.0], [94.3, 24961.0], [94.4, 24961.0], [94.5, 24961.0], [94.6, 24961.0], [94.7, 24961.0], [94.8, 24961.0], [94.9, 24961.0], [95.0, 25035.0], [95.1, 25035.0], [95.2, 25035.0], [95.3, 25035.0], [95.4, 25035.0], [95.5, 25035.0], [95.6, 25035.0], [95.7, 25035.0], [95.8, 25035.0], [95.9, 25035.0], [96.0, 25168.0], [96.1, 25168.0], [96.2, 25168.0], [96.3, 25168.0], [96.4, 25168.0], [96.5, 25168.0], [96.6, 25168.0], [96.7, 25168.0], [96.8, 25168.0], [96.9, 25168.0], [97.0, 25275.0], [97.1, 25275.0], [97.2, 25275.0], [97.3, 25275.0], [97.4, 25275.0], [97.5, 25275.0], [97.6, 25275.0], [97.7, 25275.0], [97.8, 25275.0], [97.9, 25275.0], [98.0, 25352.0], [98.1, 25352.0], [98.2, 25352.0], [98.3, 25352.0], [98.4, 25352.0], [98.5, 25352.0], [98.6, 25352.0], [98.7, 25352.0], [98.8, 25352.0], [98.9, 25352.0], [99.0, 25454.0], [99.1, 25454.0], [99.2, 25454.0], [99.3, 25454.0], [99.4, 25454.0], [99.5, 25454.0], [99.6, 25454.0], [99.7, 25454.0], [99.8, 25454.0], [99.9, 25454.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 64.0, "series": [{"data": [[23400.0, 2.0], [23200.0, 1.0], [23300.0, 1.0], [23100.0, 1.0], [23000.0, 1.0], [24300.0, 2.0], [23700.0, 3.0], [24200.0, 1.0], [24100.0, 1.0], [24000.0, 1.0], [23900.0, 2.0], [23600.0, 2.0], [24500.0, 1.0], [23800.0, 1.0], [25000.0, 1.0], [25300.0, 1.0], [25400.0, 1.0], [24900.0, 1.0], [25100.0, 1.0], [25200.0, 1.0], [24600.0, 2.0], [24700.0, 1.0], [24800.0, 1.0], [200.0, 64.0], [300.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 70.0, "series": [{"data": [[0.0, 70.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.037037037037037, "minX": 1.73176314E12, "maxY": 11.652173913043478, "series": [{"data": [[1.73176314E12, 3.037037037037037], [1.7317632E12, 11.652173913043478]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7317632E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 328.625, "minX": 1.0, "maxY": 25454.0, "series": [{"data": [[2.0, 23085.0], [9.0, 23553.0], [10.0, 23499.0], [3.0, 588.8095238095239], [14.0, 24099.25], [4.0, 328.625], [1.0, 23493.0], [18.0, 24018.5], [19.0, 24604.0], [20.0, 24898.0], [5.0, 23575.5], [21.0, 24794.0], [22.0, 24685.0], [24.0, 24525.5], [25.0, 25168.0], [27.0, 24661.5], [28.0, 25454.0], [7.0, 23571.0], [29.0, 25352.0], [30.0, 25035.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.0, 7420.35]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 109.63333333333334, "minX": 1.73176314E12, "maxY": 225.0, "series": [{"data": [[1.73176314E12, 225.0], [1.7317632E12, 149.96666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73176314E12, 128.7], [1.7317632E12, 109.63333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7317632E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 218.07407407407405, "minX": 1.73176314E12, "maxY": 15875.195652173914, "series": [{"data": [[1.73176314E12, 218.07407407407405], [1.7317632E12, 15875.195652173914]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7317632E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 217.70370370370372, "minX": 1.73176314E12, "maxY": 15874.95652173913, "series": [{"data": [[1.73176314E12, 217.70370370370372], [1.7317632E12, 15874.95652173913]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7317632E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.7391304347826086, "minX": 1.73176314E12, "maxY": 1.685185185185186, "series": [{"data": [[1.73176314E12, 1.685185185185186], [1.7317632E12, 0.7391304347826086]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7317632E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 204.0, "minX": 1.73176314E12, "maxY": 25454.0, "series": [{"data": [[1.73176314E12, 279.0], [1.7317632E12, 25454.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73176314E12, 229.5], [1.7317632E12, 24112.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73176314E12, 279.0], [1.7317632E12, 25454.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73176314E12, 250.5], [1.7317632E12, 25408.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.73176314E12, 205.0], [1.7317632E12, 204.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73176314E12, 215.0], [1.7317632E12, 354.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7317632E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 212.0, "minX": 4.0, "maxY": 25403.0, "series": [{"data": [[4.0, 255.5], [9.0, 212.0], [10.0, 218.0], [20.0, 25403.0], [11.0, 217.0], [7.0, 338.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[20.0, 24443.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 211.5, "minX": 4.0, "maxY": 25403.0, "series": [{"data": [[4.0, 253.5], [9.0, 211.5], [10.0, 217.0], [20.0, 25403.0], [11.0, 217.0], [7.0, 338.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[20.0, 24443.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.73176314E12, "maxY": 0.9333333333333333, "series": [{"data": [[1.73176314E12, 0.9333333333333333], [1.7317632E12, 0.7333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7317632E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.73176314E12, "maxY": 0.9, "series": [{"data": [[1.73176314E12, 0.9], [1.7317632E12, 0.4666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7317632E12, 0.3]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7317632E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.73176314E12, "maxY": 0.9, "series": [{"data": [[1.73176314E12, 0.9], [1.7317632E12, 0.4666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7317632E12, 0.3]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7317632E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.73176314E12, "maxY": 0.9, "series": [{"data": [[1.73176314E12, 0.9], [1.7317632E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7317632E12, 0.3]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7317632E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

