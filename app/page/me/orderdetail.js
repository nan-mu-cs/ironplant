/**
 * Created by andyyang on 16/7/8.
 */
var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} = React;
var GoodsDetial = require('../goodsdetail');
var OrderDetail = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  componentDidMount: function() {
  },
  _showProductDetail(){
    this.props.navigator.push({
      title: '商品详情',
      component: GoodsDetial,
      passProps:{
        data: 'test'
      }
    });
  },
  render: function() {
    return (
      <View style={{backgroundColor:'white'}}>
        <View style={[styles.row,{padding:10,}]}>
          <View style={{flex:1}}>
            <Text style={{color:'#585c64'}}>商品名</Text>
            <View style={[styles.row]}>
              <Text style={{fontSize:12,color:'#929aa2'}}>订单号:</Text>
              <Text style={{fontSize:12,color:'#929aa2',marginLeft:5}}>订单编号</Text>
            </View>
          </View>
          <Text>订单状态</Text>
        </View>
        <View style={styles.line}/>
        <View style={[styles.row,{padding:10,marginLeft:30}]}>
          <Text style={{color:'#585c64'}}>杨凯</Text>
          <Text style={{color:'#585c64',marginLeft:30}}>15700080071</Text>
        </View>
        <View style={{marginLeft:30,marginBottom:3}}>
          <Text>浙江大学玉泉校区七舍2021室</Text>
        </View>
        <View style={styles.line}/>
        <TouchableHighlight underlayColor="#dad9d7" onPress={this._showProductDetail}>
          <View style={[styles.row,{padding:10}]}>
            <View style={{width:60}}>
              <Image style={[styles.thumb]} source={{uri:'http://placehold.it/100x100'}} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text>这是一个产品的产品名</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.line}/>
        <View style={[styles.row,{padding:10,}]}>
          <View style={{flex:1}}>
            <Text style={{color:'#585c64'}}>支付方式</Text>
          </View>
          <Text>在线支付</Text>
        </View>
        <View style={styles.smline}/>
        <View style={[styles.row,{padding:10,}]}>
          <View style={{flex:1}}>
            <Text style={{color:'#585c64'}}>支付金额</Text>
          </View>
          <Text>¥50.0</Text>
        </View>
        <View style={styles.smline}/>
        <View style={[styles.row,{padding:10,}]}>
          <View style={{flex:1}}>
            <Text style={{color:'#585c64'}}>发票信息</Text>
          </View>
          <Text>纸质发票</Text>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  smline:{
    height:1,
    backgroundColor: '#eef0f3',
  },
  line:{
    height:10,
    backgroundColor: '#eef0f3',
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 10
  },
});

module.exports = OrderDetail;
