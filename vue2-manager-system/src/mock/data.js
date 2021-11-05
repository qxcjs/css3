import Mock from "mockjs"

let datetime = '@datetime(yyyy-MM-dd HH:mm:ss)'
let date = '@date(yyyy-MM-dd)'

export default {
    userInfo: Mock.mock({
        code: 200,
        msg: "操作成功",
        data: {
            "username": "liss",
            "password": "liss"
        }
    }),
    memberInfos: Mock.mock({
        code: 200,
        msg: "操作成功",
        total: 98,
        'data|98': [{
            'id|+1': 1,
            'update_time': datetime,
            'create_time': datetime,
            'member_card': /[a-zA-Z0-9]{10}/,
            'member_name': '@cname',
            'member_birthday': date,
            'phone_number': /^1[0-9]{10}$/,
            'card_money': /[a-zA-Z0-9]{1,9}/,
            'available_integral': /[a-zA-Z0-9]{1,9}/,
            'pay_type|1-4': 1,
            'member_address': '@province',
        }],
    }),
    deleteSuccess: Mock.mock({
        code: 200,
        msg: "删除完成",
        success: true,
    }),
    deleteFail: Mock.mock({
        code: 200,
        msg: "删除失败",
        success: false,
    })
};
