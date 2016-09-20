import React  from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import Item   from './Item';
import logo from './logo.svg';
import './App.css';

const Grid = WidthProvider(Responsive);

const App = () => {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 1, title: 'Titre 1', content: <Item title='toto' content='titi' />},
    {i: 'b', x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4, title: 'Titre 2', content: 'B'},
    {i: 'c', x: 4, y: 0, w: 1, h: 1, title: 'Titre 3', content: 'C'}
  ];
  const items = layout.map((block) => <Item key={block.i} title={block.title} content={block.content} />);
  //const items = layout.map((block) => <div key={block.i}>{block.title}</div>);
  return (
    <Grid className="layout" layout={layout} cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}>
      {items}
    </Grid>
  );
}

export default App;
