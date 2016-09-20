import React from 'react';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const Item = ({title,content,children,...props}) => {
  return (
    <div {...props}>
      <h1>{title}</h1>
      <div>{content}</div>
      {children}
    </div>
  );
}

Item.propTypes = {
  title : React.PropTypes.string.isRequired,
  content : React.PropTypes.any.isRequired,
}

export default Item;
