import { api } from "apis/configs/axiosConfigs"
import { defineCancelApiObject } from "apis/configs/axiosUtils"
import { Job } from "types/scaleAPI"

export const ScaleAPI = {
  getJobs: async function (cancel:Boolean = false) {
    const response = await api.request({
      url: "/Jobs",
      withCredentials: false,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  },
  sendJob: async function (job:Job, cancel:Boolean = false) {
    const response = await api.request({
      url: "/Jobs",
      withCredentials: false,
      method: "POST",
      data: job,
      signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  },
  getResults: async function (cancel:Boolean = false) {
    const response = await api.request({
      url: "/Results",
      withCredentials: false,
      method: "GET",
      signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  },
  deleteJobs: async function (jobs: Job[], cancel:Boolean = false) {
    const response = await api.request({
      url: "/DeleteJob",
      withCredentials: false,
      method: "POST",
      data: jobs,
      signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  },
  status: async function (cancel:Boolean = false) {
    const response = await api.request({
        url: "/Status",
      withCredentials: false,
        method: "GET",
        signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  },
  sendSerial: async function (serial:number, cancel:Boolean = false) {
    const response = await api.request({
      url: "/SerialNumber",
      withCredentials: false,
      method: "POST",
      data: serial,
      signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  },
  sendSecret: async function (secret:number, cancel:Boolean = false) {
    const response = await api.request({
      url: "/SecretNumber",
      withCredentials: false,
      method: "POST",
      data: secret,
      signal: cancel ? cancelApiObject[this.getJobs.name].handleRequestCancellation().signal : undefined
    })

    return response.data
  }
}

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(ScaleAPI)
