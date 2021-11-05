// 会员管理接口
export default {
    getMembers: {
        pattern: /\/api\/getMemberList/,
        path: '/api/getMemberList'
    },
    getMember: {
        pattern: /\/api\/getMemberById/,
        path: '/api/getMemberById'
    },
    deleteById: '/api/members',
    addMember: '/api/member',
    editMember: '/api/member'
}
