import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ColumnChartItem extends Component {
  constructor(props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem(index) {
    this.props.onPressColumn(index)
  }

  render() {
    let seriesCount = this.props.seriesArray.length
    return (
      <View>
        <View style={{ height: this.props.defaultHeight }}>
          <View style={styles.chartView}>
            {/* {renders} */}
            {this.props.seriesArray.map((d, index) => {
              return (
                <View>
                  <Text style={{ textAlign: 'center', marginVertical: 5, fontSize: 10 }}>{this.props.seriesArray[index].data[this.props.dataIndex]['y']}</Text>
                  <TouchableOpacity onPress={() => this.onPressItem(index)}>
                    <View key={index} style={[styles.bar, {
                      width: this.props.defaultWidth / seriesCount,
                      height: this.props.seriesArray[index].data[this.props.dataIndex]['ratioY'],
                      marginRight: 20,
                      backgroundColor: this.props.seriesArray[index].seriesColor,
                      borderColor: this.props.isSelected ? this.props.highlightColor : '#FFFFFF'
                    }]} />
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  chartView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    paddingTop: 20,
  },
  bar: {
    justifyContent: 'flex-end',
    marginHorizontal: 30
  }
})

ColumnChartItem.propTypes = {
  seriesArray: PropTypes.array,
  onClick: PropTypes.func,
  defaultWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  defaultMargin: PropTypes.number,
  primaryColor: PropTypes.string,
  highlightColor: PropTypes.string,
  onPressColumn: PropTypes.func
}
