import { useAtom } from "jotai";
import React, { useEffect, useMemo, useState } from "react";
import { selectProfiles, selectpodAddress, useAnalyseGraphData, useGraphData, useProfiles, userData } from "../store/dashboardAtom";
import moment from "moment";
import { AiOutlineDownload } from "react-icons/ai";
import { calculateAverage, letterColors } from "../util";

const containerProps = {
    width: '90%',
    height: 350,
    // border: '1px solid black',
};

export default function Dialog({
    graphData
}: {
    graphData: any
}) {
    // const [setAnalyseGraph, setsetAnalyseGraph] = React.useState(false);
    const [graphDatas, setGraphData] = useAtom(useGraphData);
    const [getProfile,] = useAtom(useProfiles)
    const [profiles, setselectProfiles] = useAtom(selectProfiles)
    const [user,] = useAtom(userData);
    // const [dateTime,] = useState(moment().format('DD-MM-YYYY hh:mm a'))
    const [podAddress,setPodAddress] = useState('All');
    const [analyseGrap,setAnalyseGraph] = useAtom(useAnalyseGraphData)

    
    
    const { getColors = [],graphChangeData} = useMemo(() => {
        const getColor = graphData.map((it: {legendText: string}) => it.legendText)
        let gData = graphData
        if(podAddress !== 'All') {
            gData = graphData.filter((a:any ) => {
                return (podAddress === a?.legendText) || (a?.legendText === 'NA')
            })
        }
        console.log('podAddress',podAddress,gData)

        
        return {
            getColors: getColor,
            graphChangeData: gData
        }
    },[graphData,podAddress])
    const {average,maxValue,minValue} = useMemo(() => {
        if(!Array.isArray(graphData) ||  graphData.length === 0 ) {
            return {
              average: 0,
              minValue: 0,
              maxValue: 0
            }
          }
          const yValues: number[] = []
          graphData.forEach((item) => {
            const dataPoint = item.dataPoints
            dataPoint.forEach((element: {y:number}) => {
                yValues.push(element.y)
            });
          })

          const getAverage = calculateAverage(yValues)
          const getMinValue = yValues.reduce((a, b) => Math.min(a, b))
          const getMaxValue = yValues.reduce((a, b) => Math.max(a, b))
          return {
            average: getAverage.toFixed(2),
            minValue: getMinValue.toFixed(2),
            maxValue: getMaxValue.toFixed(2)
          }
    },[graphData])
    const canvasOptions = {
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        toolTip: {
            shared: true  //disable here. 
        },
        animationEnabled: true,
        data: graphChangeData
    }
    useEffect(() => {
        if (Array.isArray(graphChangeData) && graphChangeData.length > 0 && analyseGrap && "CanvasJS" in window) {
            // @ts-ignore
            const chart = new window.CanvasJS.Chart("chartContainer1", canvasOptions)
            chart.render()
            const exportChart1 = document.getElementById("exportChart1")
            if (exportChart1) {
                exportChart1.addEventListener("click", function () {
                    chart.exportChart1({ format: "jpg" });
                });
            }
        }
    }, [analyseGrap, graphChangeData,podAddress])
    console.log('graphData', graphData,getColors);
    return (
        <>
            {analyseGrap ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[60vw] p-4 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[60vw] bg-[#24303f] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Analysis
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setAnalyseGraph(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="w-7 h-7 cursor-pointer" id="exportChart1">
                                    <AiOutlineDownload color="#d52905" size="20" />
                                </div>
                                <div className="mb-2 h-[350] w-full">
                                    <div id="chartFour" className=" ">
                                        <div>
                                            <div id="chartContainer1" style={containerProps} />
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

<div className='chartGrid'>
<div className="flex flex-col">
<h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
  Avg
</h4>
  <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 ">
    <div className="p-2.5 xl:p-5">
      <h5 className="text-sm font-medium uppercase xsm:text-base">
        Avg(Sec)
      </h5>
    </div>
    <div className="p-2.5 text-center xl:p-5">
      <h5 className="text-sm font-medium uppercase xsm:text-base">
        Best(sec)
      </h5>
    </div>
    <div className="p-2.5 text-center xl:p-5">
      <h5 className="text-sm font-medium uppercase xsm:text-base">
        Poor(sec)
      </h5>
    </div>
    {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
      <h5 className="text-sm font-medium uppercase xsm:text-base">
        Sales
      </h5>
    </div>
    <div className="hidden p-2.5 text-center sm:block xl:p-5">
      <h5 className="text-sm font-medium uppercase xsm:text-base">
        Conversion
      </h5>
    </div> */}
  </div>

  <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
    {/* <div className="flex items-center gap-3 p-2.5 xl:p-5">
      <div className="flex-shrink-0">
      </div>
      <p className="hidden text-black dark:text-white sm:block">Google</p>
    </div> */}

    <div className="flex items-center justify-center p-2.5 xl:p-5">
      <p className="text-black dark:text-white">{average}</p>
    </div>

    <div className="flex items-center justify-center p-2.5 xl:p-5">
      <p className="text-meta-3">{minValue}</p>
    </div>

    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
      <p className="text-black dark:text-white">{maxValue}</p>
    </div>

    {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
      <p className="text-meta-5">4.8%</p>
    </div> */}
  </div>
</div>
<div>
<h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
  Positions
</h4>
<div className="flex flex-wrap gap-3 justify-center p-5">
<button
        onClick={() => setPodAddress('All')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'All' ? 'bg-[#687583]'  : 'bg-[#1c2434]'} py-2 px-5 text-center font-medium text-[#FFF] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          All
        </button>
        {
          Array.isArray(getColors) && getColors.length > 0 && getColors.map((item: keyof typeof letterColors,i) => {
            return (
              <button
              key={item + i}
        onClick={() => setPodAddress(item)}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === item ? 'bg-[#687583]' : 'bg-[#1c2434]' }    py-2 px-5 text-center font-medium hover:bg-opacity-90 focus:bg-[#687583]`}
        style={{
          color: item ? letterColors[item] : undefined
        }}
        >
          {item}
        </button>
            )
          })
        }
        {/* <button
        onClick={() => setPodAddress('First')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'First' ? 'bg-[#687583]' : 'bg-[#1c2434]' }    py-2 px-5 text-center font-medium text-[#D32F2F] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          Back Left
        </button>
        <button
        onClick={() => setPodAddress('Second')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'Second' ? 'bg-[#687583]' : 'bg-[#1c2434]' }  py-2 px-5 text-center font-medium text-[#0ED989] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          Back Right
        </button>
        <button
        onClick={() => setPodAddress('Third')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'Third' ? 'bg-[#687583]' : 'bg-[#1c2434]'} py-2 px-5 text-center font-medium text-[#0828F8] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          Front Left
        </button>
        <button
        onClick={() => setPodAddress('Fourth')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'Fourth' ? 'bg-[#687583]' : 'bg-[#1c2434]'} py-2 px-5 text-center font-medium text-[#F2DA07] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          Front Right
        </button>
        <button
        onClick={() => setPodAddress('Fifth')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'Fifth' ? 'bg-[#687583]' : 'bg-[#1c2434]'} py-2 px-5 text-center font-medium text-[#F89208] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          Side Left
        </button>
        <button
        onClick={() => setPodAddress('Sixth')}
          className={`inline-flex items-center justify-center rounded-full ${podAddress === 'Sixth' ? 'bg-[#687583]' : 'bg-[#1c2434]'} py-2 px-5 text-center font-medium text-[#6937C7] hover:bg-opacity-90 focus:bg-[#687583]`}
        >
          Side Right
        </button> */}
        
</div>
</div>
</div>

</div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setAnalyseGraph(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}