import Mock from 'mockjs'
import qs from 'qs'

function paramsToObj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
        + '"}')
}

let memberArray = []
let total = 98

let createMember = id => Mock.mock({
    'id|+1': id + 10,
    'update_time': '@datetime(yyyy-MM-dd HH:mm:ss)',
    'create_time': '@date(yyyy-MM-dd)',
    'member_card': /[a-zA-Z0-9]{10}/,
    'member_name': '@cname',
    'member_birthday': '@date(yyyy-MM-dd)',
    'phone_number': /^1[0-9]{10}$/,
    'card_money': /[a-zA-Z0-9]{1,9}/,
    'available_integral': /[a-zA-Z0-9]{1,9}/,
    'pay_type|1-4': 1,
    'member_address': '@province',
})

for (let i = 0; i < total; i++) {
    memberArray.push(createMember(i))
}
console.log(memberArray)

export default {
    /**
     * 获取会员列表
     * @param options
     * @returns {{msg: string, total: number, code: number, data: []}}
     */
    getMemberList: options => {
        console.log(options)

        // currentPage 默认值 1, pageSize 默认值 20
        const {currentPage = 1, pageSize = 20} = paramsToObj(options.url)
        const members = memberArray.filter((value, index) =>
            index >= (currentPage - 1) * pageSize && index < currentPage * pageSize
        )
        return {
            code: 200,
            msg: "操作成功",
            total: total,
            data: members
        }
    },
    getMemberById: options => {
        console.log(options)
        const {id} = paramsToObj(options.url);
        if (memberArray.some(v => v.id == id)) {
            console.log(`用户存在, id : ${id}`)
            return {
                code: 200,
                msg: "success",
                data: memberArray.filter(v => v.id == id).pop()
            }
        } else {
            console.log(`用户不存在, id : ${id}`)
            return {
                code: 200,
                msg: "会员不存在",
            }
        }
    },
    addMember: options => {
        const {url, type, body} = options
        console.log(body)
        const member = createMember(++total);
        console.log(member)
        memberArray.push(member)
        return {
            code: 200,
            msg: "添加成功"
        }
    },
    editMember: options => {
        const member = JSON.parse(options.body);
        let exists = memberArray.some(m => {
            if (m.id == member.id) {
                Object.assign(m, member)
                return true
            }
        })
        if (exists) {
            console.log(`编辑成功, id : ${member.id}`)
            return {
                code: 200,
                msg: "编辑成功",
            }
        } else {
            console.log(`编辑失败, id : ${id}`)
            return {
                code: 200,
                msg: "编辑失败",
            }
        }
    },
    deleteMember: options => {
        console.log(options)
        const {id} = JSON.parse(options.body)
        let exists = memberArray.some((value, index) => {
            if (value.id == id) {
                console.log(`index : ${index}`)
                memberArray.splice(index, 1)
                total--
                return true
            }
        })
        if (exists) {
            console.log(`删除成功, id : ${id}`)
            return {
                code: 200,
                msg: "删除成功",
                status: true
            }
        } else {
            console.log(`删除失败, id : ${id}`)
            return {
                code: 200,
                msg: "删除失败",
                status: false
            }
        }
    }
}
