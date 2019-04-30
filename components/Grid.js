import React from "react";
import GridLayout from "react-grid-layout";
import KPI from "./KPI";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(items) {
    const { onGridChange } = this.props;
  }

  render() {
    const { config } = this.props;
    const { grid, elements } = config;

    const layout = elements.map(element => ({
      i: element.name,
      x: element.positionX,
      y: element.positionY,
      h: element.height,
      w: element.width
    }));

    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={grid.cols}
        rowHeight={grid.rowHeight}
        verticalCompact={false}
        width={grid.width}
        onLayoutChange={this.onLayoutChange}
      >
        {elements.map(element => (
          <div key={element.name}>
            <KPI {...element.props} />
          </div>
        ))}
      </GridLayout>
    );
  }
}

export default Grid;
