export const apiRoute = {
	channelLogic: {
		Login: {
			url: '/channel/garden/login',
			type: 'post',
		},

		SendMsg: {
			url: '/channel/garden/sendMsg',
			type: 'get',
		},

		ChannelTypeCompanyList: {
			url: '/channel/garden/channelTypeCompanyList',
			type: 'get',
		},

		TopFiveCompny: {
			url: '/channel/garden/topFiveCompny',
			type: 'get',
		},
		ChannelTypeImgList: {
			url: '/channel/garden/channelTypeImgList',
			type: 'get',
		},
		CompanyHonorByName: {
			url: '/channel/garden/companyHonorByName',
			type: 'get',
		},
		PolicyList: {
			url: '/channel/garden/policyList',
			type: 'get',
		},
		invoiceCheck: {
			url: '/channel/garden/invoiceCheck',
			type: 'get',
		},
		GetProvinceList: {
			url: '/product/area/getProvinceList',
			type: 'get',
		},
		FindAreaListByParentId: {
			url: '/product/area/findAreaListByParentId',
			type: 'get',
		},
		GovernmentSubsidies: {
			url: '/channel/garden/governmentSubsidies',
			type: 'get',
		}
	}
}
