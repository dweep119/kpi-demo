import React, { Component } from "react";
import FitText from "@kennethormandy/react-fittext";

export default class KPI extends Component {
  static defaultProps = {
    primaryValue: {
      prefix: "",
      suffix: "",
      value: 0
    },
    secondaryValue: null,
    // secondaryValue: {
    //   prefix: "",
    //   suffix: "",
    //   value: 0
    // }
  };

  render() {
    const { primaryValue, title, subtitle, secondaryValue } = this.props;

    return (
      <div
        className="d_flex justify_center align_center h_100 custom"
        style={{ background: "#03A9F4" }}
      >
        <div className="handle-resize d_flex flex_column align_center">
          <h1 className="ft_lght mb_sm d_flex align_start" id="big">
            <FitText compressor={1} minFontSize={32} maxFontSize={96}>
              {`${primaryValue.prefix}${primaryValue.value.toFixed(2)}${
                primaryValue.suffix
              }`}
            </FitText>
            {/* <img alt="" src="assets/img/up-arrow.svg" className="icon_start" /> */}
          </h1>
          {title && (
            <h5 className="mb_md ft_nrml" id="mid">
              {title}
            </h5>
          )}
          {subtitle && <p className="ft_nrml mb_md">{subtitle}</p>}
          {secondaryValue && (
            <h6 className="mb_md ft_lght" id="xsmall">
              {`${secondaryValue.prefix}${secondaryValue.value.toFixed(2)}${
                secondaryValue.suffix
              }`}
            </h6>
          )}
        </div>
      </div>
    );
  }
}
