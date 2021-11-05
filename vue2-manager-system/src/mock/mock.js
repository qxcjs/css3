//创建mock的入口文件，并配置请求的接口地址，提交方式，返回的假数据
import Mock from 'mockjs'
//导入的模拟数据
import data from "./data";
import Member from "./member"
import api from '../utils/api'

/**
 * Mock.mock( rurl, rtype, template )
 * rurl:请求的接口地址
 * rtype:提交方式
 * template:返回数据
 */

Mock.mock(api.Login.login, "post", data.userInfo);
Mock.mock(api.Members.getMembers.pattern, 'get', Member.getMemberList);
Mock.mock(api.Members.getMember.pattern, 'get', Member.getMemberById);
Mock.mock(api.Members.addMember, 'post', Member.addMember);
Mock.mock(api.Members.editMember, 'put', Member.editMember);
Mock.mock(api.Members.deleteById, 'delete', Member.deleteMember);
