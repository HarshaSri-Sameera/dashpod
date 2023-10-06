import { useAtom } from 'jotai';
import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { filterActivity, filterDuration, filterPlayers, filterSubmit, useAnalyseGraphData, useGraphData } from '../../store/dashboardAtom';
import { useMemo, useRef } from 'react';
import moment from 'moment';
import { Bashcolors, average, letterColors } from '../../util';
import Dialog from '../../components/Dialog';


const animatedComponents = makeAnimated();


/**
 * Description
 * @param {any} fl - Fliter list
 * @param {any} gd - Graph Data List
 * @param {any} k - Activity Name
 * @returns {any}
 */
const getListvalue = (fl: string[], gd: any[], k: string, pk: string): any => {
    const newList: any = []
    gd.forEach(element => {
        if (fl.includes(element[pk])) {
            newList.push(element)
        }
    });

    const getData = [...new Set(newList.map((item: any) => item[k]))].map((item) => ({
        value: item,
        label: typeof item === 'string' ? item.toUpperCase() : item,
    }))

    return getData
}


export default function FilterCard() {
    const [filterPlayerList, setFilterPlayers] = useAtom(filterPlayers)
    const [filterActivityList, setFilterActivityList] = useAtom(filterActivity)
    const [filterDurationList, setFilterDurationList] = useAtom(filterDuration)
    const [graphData,] = useAtom(useGraphData);
    const [, setFilterSubmit] = useAtom(filterSubmit)
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const AnalyseRef = useRef<HTMLButtonElement | null>(null);
    const [analyseGrap,setAnalyseGraph] = useAtom(useAnalyseGraphData)
    const { filterPlayerOptions, filterActivityOptions, duration } = useMemo(() => {
        const filterPlayerKey = 'playerName'
        const filterActivityName = 'activityName'
        // const arrayUniqueByKey = [...new Map(graphData.map((item: any) =>
        //     [item[filterKey], item])).values()];
        const filterPlayerOptions = [...new Set(graphData.map((item: any) => item[filterPlayerKey]))].map((item) => ({
            value: item,
            label: typeof item === 'string' ? item.toUpperCase() : item,
        }))
        const filterActivityOptions = Array.isArray(filterPlayerList) && filterPlayerList.length > 0 ? getListvalue(filterPlayerList.map(item => item?.value), graphData, filterActivityName, filterPlayerKey) : [...new Set(graphData.map((item: any) => item[filterActivityName]))].map((item) => ({
            value: item,
            label: typeof item === 'string' ? item.toUpperCase() : item,
        }))


        const duration = [{
            value: 'week',
            label: 'Week'
        }, {
            value: 'month',
            label: 'Month'
        }, {
            value: '2months',
            label: '2 Months'  
        }]

        return {
            filterPlayerOptions,
            filterActivityOptions,
            duration
        } as {
            filterPlayerOptions: {
                value: string;
                label: string;
            }[];
            filterActivityOptions: {
                value: string;
                label: string;
            }[];
            duration: {
                value: string;
                label: string;
            }[];
        }

    }, [graphData, filterPlayerList])
    const setFilterChange = (r: MultiValue<unknown>) => {
        if (buttonRef.current !== null && "focus" in buttonRef.current) {
            buttonRef.current?.focus();
        }
        setFilterPlayers(r)

    }

    const setFilterActivityChange = (r: MultiValue<unknown>) => {
        if (buttonRef.current !== null && "focus" in buttonRef.current) {
            buttonRef.current?.focus();
        }
        setFilterActivityList(r)
    }

    const setSubmit = () => {
        setFilterSubmit({
            filterPlayers: filterPlayerList.map((it: any) => it['value']),
            filterActivity: filterActivityList.map((it: any) => it['value']),
            // @ts-ignore
            filterDuration: filterDurationList.map((it: any) => it['value']),
        })
    }

    function getDatesInRange(startDate: moment.Moment, endDate: moment.Moment): string[] {
        const datesArray: string[] = [];
        let currentDate = startDate.clone();
        
        while (currentDate.isSameOrBefore(endDate, 'day')) {
            datesArray.push(currentDate.format('YYYY-MM-DD'));
            currentDate.add(1, 'day');
        }
        
        return datesArray;
    }
    const daysType = {
        'week': 7,
        'month': 30,
        '2months': 60
    }
    function getMonthRange(dayType: keyof typeof daysType): string[] {
        const today = moment('2023-07-26');
        const thirtyDaysAgo = today.clone().subtract(daysType[dayType], 'days');
        console.log('thirtyDaysAgo',thirtyDaysAgo.format('YYYY-MM-DD'),daysType[dayType],dayType,filterDurationList)
        return getDatesInRange(thirtyDaysAgo, today);
    }

    const setAnalyse = () => {
        setAnalyseGraph(prev => !prev)
    }

    const analyseGraph = useMemo(() => {
        console.log('filterDurationList',filterDurationList);
        let arrDate: {
            [k: string]: any[]
        } = {
            
        }
        // const dataCheck: string[] = []
        const playersSingle = Boolean(filterPlayerList.length === 1)
        if(playersSingle) {
            // @ts-ignore
            const getArr = getMonthRange(filterDurationList.length > 0 ? filterDurationList[0]?.value : 'month')
            const getPlayersList = graphData.filter((it: {
                playerName: string;
                activityName: string;
            }) => filterPlayerList.some((vt: any) => it.playerName === vt?.value) && filterActivityList.some((vt: any) => it.activityName === vt?.value))

            getPlayersList.forEach((item: {
                analyticsValuesList: Array<{
                    entryX: number;
                    entryY: number;
                    podAddress:string;
                }>;
                dateAndTime: number;
            }) => {
                        const newIt = item.analyticsValuesList
                        newIt.forEach((element) => {
                            // console.log('podAddress',element['podAddress']) 
                            if('podAddress' in element) {
                            arrDate[element['podAddress']] = element['podAddress'] in arrDate ?   [...arrDate[element['podAddress']],{
                                ...element,
                                date: moment.unix(item.dateAndTime).format('YYYY-MM-DD')
                            }] : [{
                                ...element,
                                date: moment.unix(item.dateAndTime).format('YYYY-MM-DD')
                            }]
                            }
                        });
            })

            
            const series: Array<{
                type: "line";
                markerSize: number;
                showInLegend: boolean;
                legendText: string;
                dataPoints: Array<{
                    x: string;
                    y: number;
                    indexLabel: string;
                    // markerColor: string;
                }>
            }> = [];
            
            Object.entries(arrDate).forEach((item,i) => {
                const dataPoint: {
                    x: any;
                    y: number;
                    indexLabel: string;
                }[] = []

                    getArr.forEach((it: any) => {
                        const getNewDate = item[1].filter((vt:any) => {
                            return vt.date === it
                        })
                        console.log('getDateLength',getNewDate)
                    if(getNewDate.length > 0) {
                        const sum = getNewDate.map(it => it.entryY).reduce((a:any,c:any) => {
                            console.log('reducer',a.entryY + c,a,c)
                            return a + c
                        }, 0);
                        const avg = sum / getNewDate.length;
                        console.log('playersSingle213',sum,avg,getNewDate)
                        const getColor = item[1][0]
                        dataPoint.push({
                            y: avg/1000,
                            x: new Date(it),
                            indexLabel: (getColor.entryY/1000)?.toString(),
                            // @ts-ignore
                            markerColor: letterColors[item[0]]
                        })

                    }
                })
                series.push({
                    type: "line",
                    showInLegend: true, 
                    legendText: item[0],
                    markerSize: 10,
                    dataPoints: dataPoint,
                    // @ts-ignore
                    lineColor: letterColors[item[0]],
                  })
            })

            // setAnalyseGraph(series)
            console.log('playersSingle',getPlayersList,series);

            return series
        }

        const players: {
            [k: string]: any[]
        } = {

        }

        const series: Array<{
            type: "line";
            markerSize: number;
            showInLegend: boolean;
            legendText: string;
            dataPoints: Array<{
                x: string;
                y: number;
                indexLabel: string;
                // markerColor: string;
            }>
        }> = [];
        
        // @ts-ignore
        const getArr = getMonthRange(filterDurationList.length > 0 ? filterDurationList[0]?.value : 'month')
        const getPlayersList = graphData.filter((it: {
            playerName: string;
            activityName: string;
        }) => filterPlayerList.some((vt: any) => it.playerName === vt?.value) && filterActivityList.some((vt: any) => it.activityName === vt?.value))

        getPlayersList.forEach((item: any) => {
            const newIt = item.analyticsValuesList
            newIt.forEach((element: any) => {
                players[item['playerName']] = item['playerName'] in players ? [...players[item['playerName']],{
                    ...element,
                    date: moment.unix(item.dateAndTime).format('YYYY-MM-DD')
                }] : [{
                    ...element,
                    date: moment.unix(item.dateAndTime).format('YYYY-MM-DD')
                }]
            });
        })

        Object.entries(players).forEach((item) => {
            const dataPoint: {
                x: any;
                y: number;
                indexLabel: string;
            }[] = []

                getArr.forEach((it: any) => {
                    const getNewDate = item[1].filter((vt:any) => {
                        return vt.date === it
                    })
                if(getNewDate.length > 0) {
                    const sum = getNewDate.map(it => it.entryY).reduce((a:any,c:any) => {
                        console.log('reducer',a.entryY + c,a,c)
                        return a + c
                    }, 0);
                    const avg = sum / getNewDate.length;
                    console.log('playersSingle213',sum,avg,getNewDate)
                    const getColor = item[1][0]
                    dataPoint.push({
                        y: avg/1000,
                        x: new Date(it),
                        indexLabel: (getColor.entryY/1000)?.toString(),
                        // @ts-ignore
                        // markerColor: letterColors[(getColor.entryY/1000)?.toString()]
                    })

                }
            })
            // console.log('letterColors',letterColors[item[0]],item);
            
            series.push({
                type: "line",
                showInLegend: true, 
                legendText: item[0],
                markerSize: 10,
                // @ts-ignore
                // lineColor: letterColors[item[0]],
                dataPoints: dataPoint
              })
        })

        // setAnalysePos()
        // setAnalyseGraph(series)

        return series

        // console.log('getPlayersList1',players,series)
    },[analyseGrap])

    

    return (
        <>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className='filterGrid'>
                <div className="">
                    <h3 className='text-lg font-semibold mb-2'>
                        Select Players
                    </h3>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[filterPlayerOptions[2]]}
                        aria-label='Players'
                        onChange={(r) => setFilterChange(r)}
                        isMulti
                        className='text-[#64748b]'
                        options={filterPlayerOptions}
                    />
                </div>
                {/* <div className='flex flex-col'>
                    <h3></h3>
                    <div>
                        Players
                    </div>
                </div> */}
                <div className="">
                    <h3 className='text-lg font-semibold mb-2'>
                        Select Activity
                    </h3>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[filterActivityOptions[2]]}
                        aria-label='Activity'
                        onChange={e => setFilterActivityChange(e)}
                        isMulti
                        options={filterActivityOptions}
                        className='text-[#64748b]'
                    />
                </div>
                <div className="">
                    <h3 className='text-lg font-semibold mb-2'>
                        Select Duration
                    </h3>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[]}
                        aria-label='Duration'
                        isMulti
                        onChange={e => {
                            if (e.length < 2) {
                                if (buttonRef.current !== null && "focus" in buttonRef.current) {
                                    buttonRef.current?.focus();
                                }
                                setFilterDurationList(e)
                            }
                        }}
                        className='text-[#64748b]'
                        options={duration}
                        value={filterDurationList}
                    />
                </div>
                {/* <div className='flex flex-col'>
                    <h3>Select Duration

                    </h3>
                    <div>
                        Duration
                    </div>
                </div> */}
            </div>
            <div className='w-[100%] flex flex-row justify-center items-center gap-2 m-3'>
                <button
                    className="inline-flex items-center justify-center rounded-md bg-[#d52905] focus:bg-[#e49b8c] py-2 px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-7"
                    onClick={setSubmit}
                    ref={buttonRef}
                >
                    Show Results
                </button>
                <button
                    className={`${filterPlayerList && filterPlayerList.length > 0 && filterActivityList && filterActivityList.length > 0 && filterDurationList && filterDurationList.length > 0  ? '' : 'disabled:bg-[#6c6c6c]'} inline-flex items-center justify-center rounded-md bg-[#d52905] focus:bg-[#e49b8c] py-2 px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-7`}
                    onClick={setAnalyse}
                    ref={AnalyseRef}
                    disabled={!Boolean(filterPlayerList && filterPlayerList.length > 0 && filterActivityList && filterActivityList.length > 0 && filterDurationList && filterDurationList.length > 0 )}
                >
                    Analyse
                </button>
        <Dialog graphData={analyseGraph}  />
            </div>
        </div>
        </>
    )
}
