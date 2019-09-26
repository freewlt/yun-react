/**
 * Created by Administrator on 2019/9/26.
 */
import React from 'react';
import { Table, Input, InputNumber, Form, Button, Row, Col, Upload, Modal  } from 'antd';
import reqwest from 'reqwest';
import pic from '../../static/images/login/sliderCode.png'

const data = [];
//第一个表格数据
for (let i = 0; i < 1; i++) {
    data.push({
        key: i.toString(),
        nadgme: `Edrward ${i}`,
        nasdgme: 32,
        ke3y: `London Park no. ${i}`,
        gender:'',
        email:""
    });
}
//图片设置
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const EditableContext = React.createContext();
//编辑事件
class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    renderCell = ({ getFieldDecorator }) => {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item style={{ margin: 0 }}>
                        {getFieldDecorator(dataIndex, {
                            rules: [
                                {
                                    required: true,
                                    message: `Please Input ${title}!`,
                                },
                            ],
                            initialValue: record[dataIndex],
                        })(this.getInput())}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    render() {
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
    }
}

class EnterpryInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            editingKey: '',
            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ],
        };
        this.columns = [
            {
                title: '成交金额',
                dataIndex: 'key',
            },
            {
                title: '应冲金额',
                dataIndex: 'nasdgme',
            },
            {
                title: '账户余额',
                dataIndex: 'ke3yfh',
            },
            {
                title: '车辆挂靠费用',
                dataIndex: 'gender',
                editable: true,
            },
            {
                title: '结算率',
                dataIndex: 'email',
                editable: true,
            },
            {
                title: '操作',
                dataIndex: 'oildfhdfhSyzs',
                render: (text, record) =>{
                    return (
                        <div className="iconBtnGroup">
                            <Button className="searchBtn">我的账单</Button>
                            <Button className="searchBtn">提现</Button>
                            <Button className="searchBtn">支付密码</Button>
                            <Button className="searchBtn" onClick={() => this.edit(record.key)}>挂靠费用</Button>
                            <Button className="searchBtn" onClick={() => this.edit(record.key)}>结算税率</Button>
                        </div>
                    )
                },
            },
        ]
        this.columnSec = [
            {
                title: '公司名称',
                dataIndex: 'key',
            },
            {
                title: '公司描述',
                dataIndex: 'oilfgSys',
            },
            {
                title: '车辆台数限制',
                dataIndex: 'keeg3y',
            },
            {
                title: '联系电话',
                dataIndex: 'oilSyeg3s',
            },
            {
                title: '地址',
                dataIndex: 'kwetweteey',
            },
            {
                title: '营业执照',
                dataIndex: 'kewegrhbhey',
                render: (text, record) =>{
                    return (
                        <div className="picBox">
                            <div className="iconBtnGroup">
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={this.state.fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {this.state.fileList.length >= 8 ? null :  <Button className="searchBtn" onClick={this.handlePicAdd}>+</Button>}
                                </Upload>

                            </div>
                        </div>
                    )
                },
            },
            {
                title: '推广二维码',
                dataIndex: 'kweteaeey',
                render: (text, record) =>{
                    return (
                        <div className="picBox">
                            <div className="iconBtnGroup">
                                <img src={pic} alt=""/>
                            </div>
                        </div>
                    )
                },
            },
            {
                title: '企业端',
                dataIndex: 'keegwey',
                render: (text, record) =>{
                    return (
                        <div className="picBox">
                            <div className="iconBtnGroup">
                                <img src={pic} alt=""/>
                            </div>
                        </div>
                    )
                },
            },
        ]
    }

    isEditing = record => record.key === this.state.editingKey;

    //编辑
    edit(key) {
        this.setState({ editingKey: key });
    }
    //增加表格
    handleAdd = () => {
        const { count, dataSec } = this.state;
        const newData = {
            key: count,
            oilfgSys:'',
            ke3y:'',
            oilSy3s:'',
            kwetweteey: `London, Park Lane no. ${count}`,
            kewegrhbhey:''
        };
        this.setState({
            dataSec: [...dataSec, newData],
            count: count + 1,
        });
    };
    //增加图片
    handlePicAdd=()=>{

    };
    handleCancel = () => this.setState({ previewVisible: false });
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
    //获取数据
    fetch = (params = {}) => {
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                ...params,
            },
            type: 'json',
        }).then(data => {
            this.setState({
                loading: false,
                data: data.results,
                dataSec: data.results,
            });
        });
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };
        const { previewVisible, previewImage, fileList } = this.state;

        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <div className="mainBox enterpryInfo">
                <div className="mainCon">
                    <Form className="ant-advanced-search-form">
                        <EditableContext.Provider value={this.props.form}>
                            <Table
                                components={components}
                                dataSource={this.state.data}
                                columns={columns}
                            />
                        </EditableContext.Provider>
                        <Row className="seleBy">
                            <Col className="btnGroup">
                                <span className="title">系统设置</span>
                                <Button className="searchBtn">内部运行模式</Button>
                                <Button className="searchBtn">产品管理</Button>
                                <Button className="searchBtn">广告管理</Button>
                                <Button className="searchBtn">职工管理</Button>
                                <Button className="searchBtn">菜单管理</Button>
                            </Col>
                        </Row>
                        <Row className="seleBy">
                            <Col className="btnGroup">
                                <span className="title">企业信息</span>
                                <Button className="searchBtn" onClick={this.handleAdd}>添加</Button>
                                <Button className="searchBtn" onClick={this.handleAdd}>编辑</Button>
                            </Col>
                        </Row>
                        <Table
                            columns={this.columnSec}
                            dataSource={this.state.dataSec}
                            onChange={this.handleTableChange}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create()(EnterpryInfo);