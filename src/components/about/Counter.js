import React,{ useState, useEffect} from 'react'

function Counter() {

    const useCounter = (initialValue, maxValue) => {
        const [count, setCount] = useState(initialValue);


            useEffect(() => {
                if (count < maxValue) {
                  const interval = setInterval(() => {
                    setCount(prevCount => {
                      if (prevCount < maxValue) {
                        return prevCount + 1;
                      } else {
                        clearInterval(interval); // Stop the interval when count reaches maxValue
                        return prevCount;
                      }
                    });
                  }, 1); // Update count every milisecond
            
                  return () => clearInterval(interval);
                }
              }, [maxValue]); // Restart interval when maxValue changes
            
              return count;
        
      };

  function CounterComponet({icon, counter, label, classLabel, classLabel1}) {
    const count = useCounter(1900, counter)
    return (
        <div className={classLabel1}>
            <div className="gc_counter_icon">
                <i className={icon}></i>
            </div>
            <div className="count-description">
                <span className="timer">{count}</span><i className="fa fa-plus"></i>
                <h5 className={classLabel}>{label}</h5>
            </div>
        </div>
    )
  }

  return (
    <>
    {/* <!-- GC Counter Wrapper Start --> */}
    <div className="gc_counter_main_wrapper">
        <CounterComponet icon={'fa fa-heart'} counter={2540} label={'Causes'} classLabel={'con1'} classLabel1={"gc_counter_cont_wrapper"}/>
        <CounterComponet icon={'fa fa-globe'} counter={7325} label={'Places'} classLabel={'con2'} classLabel1={"gc_counter_cont_wrapper2"}/>
        <CounterComponet icon={'fa fa-user'} counter={1924} label={'Volunteers'} classLabel={'con3'} classLabel1={"gc_counter_cont_wrapper3"}/>
        <CounterComponet icon={'fa fa-users'} counter={4275} label={'Saved Life'} classLabel={'con4'} classLabel1={"gc_counter_cont_wrapper4"}/>
    </div>
    {/* <!-- GC Counter Wrapper End --> */}
    </>
  )
}

export default Counter