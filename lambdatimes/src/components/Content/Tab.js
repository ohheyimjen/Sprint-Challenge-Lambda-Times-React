import React from 'react';

const Tab = props => {
  
  const makeClassName = () => {
    return props.tab === props.selectedTab ? 'tab active-tab' : 'tab'
  }

  const handleClick = (e) => {
    props.selectTabHandler(props.tab)
  }

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <div
      className={makeClassName()}
      onClick={handleClick}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
// Tab.PropType= {
//   tabObject: PropType.shape({
//     onClick: PropType.onClick
//   })
// }

export default Tab;
