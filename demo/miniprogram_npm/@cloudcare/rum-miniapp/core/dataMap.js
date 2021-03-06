"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enums = require("../helper/enums");

// 需要用双引号将字符串类型的field value括起来， 这里有数组标示[string, path]
var _default = {
  rum_mini_app_startup: {
    type: _enums.RumEventType.APP,
    tags: {
      app_id: 'application.id',
      env: '_dd.env',
      app_version: '_dd.version',
      version: '_dd.version',
      sdk_name: '_dd.sdk_name',
      sdk_version: '_dd.sdk_version',
      is_signin: 'user.is_signin',
      os: 'device.os',
      device: 'device.model',
      screen_size: 'device.screen_size',
      network_type: 'device.network',
      platform: 'device.platform',
      platform_version: 'device.platform_version',
      app_framework_version: 'device.framework_version',
      app_startup_type: 'app.startup_type'
    },
    fields: {
      app_script_load_duration: 'app.script_load_duration',
      app_code_download_duration: 'app.code_download_duration',
      app_startup_duration: 'app.startup_duration'
    }
  },
  rum_mini_app_page_performance: {
    type: _enums.RumEventType.VIEW,
    tags: {
      app_id: 'application.id',
      env: '_dd.env',
      app_version: '_dd.version',
      version: '_dd.version',
      sdk_name: '_dd.sdk_name',
      sdk_version: '_dd.sdk_version',
      is_signin: 'user.is_signin',
      os: 'device.os',
      device: 'device.model',
      screen_size: 'device.screen_size',
      network_type: 'device.network',
      platform: 'device.platform',
      platform_version: 'device.platform_version',
      app_framework_version: 'device.framework_version',
      page_apdex_level: 'page.apdex_level'
    },
    fields: {
      page_fmp: 'page.fmp',
      page_fpt: 'page.fpt',
      page_resource_load_time: 'page.loading_time',
      page_onload2onshow: 'page.onload2onshow',
      page_onshow2onready: 'page.onshow2onready',
      page_staytime: 'page.stayTime',
      page_js_error_count: 'page.error.count'
    }
  },
  rum_mini_app_resource_performance: {
    type: _enums.RumEventType.RESOURCE,
    tags: {
      app_id: 'application.id',
      env: '_dd.env',
      app_version: '_dd.version',
      sdk_name: '_dd.sdk_name',
      sdk_version: '_dd.sdk_version',
      version: '_dd.version',
      is_signin: 'user.is_signin',
      os: 'device.os',
      device: 'device.model',
      screen_size: 'device.screen_size',
      network_type: 'device.network',
      platform: 'device.platform',
      platform_version: 'device.platform_version',
      app_framework_version: 'device.framework_version',
      resource_status_group: 'resource.status_group',
      resource_url_host: 'resource.url_host',
      resource_type: 'resource.type',
      resource_status: 'resource.status',
      resource_method: 'resource.method',
      response_connection: 'resource.response_connection',
      response_server: 'resource.response_server',
      response_content_type: 'resource.response_content_type',
      response_content_encoding: 'resource.response_content_encoding'
    },
    fields: {
      resource_size: 'resource.size',
      resource_load: 'resource.load',
      resource_dns: 'resource.dns',
      resource_tcp: 'resource.tcp',
      resource_ssl: 'resource.ssl',
      resource_ttfb: 'resource.ttfb',
      resource_trans: 'resource.trans',
      resource_firstbyte: 'resource.firstbyte'
    }
  },
  page: {
    type: _enums.RumEventType.VIEW,
    tags: {
      app_id: 'application.id',
      env: '_dd.env',
      app_version: '_dd.version',
      version: '_dd.version',
      sdk_name: '_dd.sdk_name',
      sdk_version: '_dd.sdk_version',
      is_signin: 'user.is_signin',
      os: 'device.os',
      device: 'device.model',
      screen_size: 'device.screen_size',
      network_type: 'device.network',
      platform: 'device.platform',
      platform_version: 'device.platform_version',
      app_framework_version: 'device.framework_version',
      os_version: 'device.os_version',
      origin_id: 'user.origin_id',
      userid: 'user.user_id',
      page_id: 'page.id',
      page_url: 'page.route',
      page_referer: 'page.referer',
      page_apdex_level: 'page.apdex_level'
    },
    fields: {
      page_fmp: 'page.fmp',
      page_fpt: 'page.fpt',
      page_resource_load_time: 'page.loading_time',
      page_onload2onshow: 'page.onload2onshow',
      page_onshow2onready: 'page.onshow2onready',
      page_staytime: 'page.stayTime',
      page_js_error_count: 'page.error.count'
    }
  },
  resource: {
    type: _enums.RumEventType.RESOURCE,
    tags: {
      app_id: 'application.id',
      env: '_dd.env',
      app_version: '_dd.version',
      version: '_dd.version',
      sdk_name: '_dd.sdk_name',
      sdk_version: '_dd.sdk_version',
      is_signin: 'user.is_signin',
      os: 'device.os',
      device: 'device.model',
      screen_size: 'device.screen_size',
      network_type: 'device.network',
      platform: 'device.platform',
      platform_version: 'device.platform_version',
      app_framework_version: 'device.framework_version',
      os_version: 'device.os_version',
      origin_id: 'user.origin_id',
      userid: 'user.user_id',
      page_id: 'page.id',
      page_url: 'page.route',
      page_referer: 'page.referer',
      resource_url: 'resource.url',
      resource_url_host: 'resource.url_host',
      resource_url_path: 'resource.url_path',
      resource_type: 'resource.type',
      resource_status: 'resource.status',
      resource_status_group: 'resource.status_group',
      resource_method: 'resource.method',
      response_connection: 'resource.response_connection',
      response_server: 'resource.response_server',
      response_content_type: 'resource.response_content_type',
      response_content_encoding: 'resource.response_content_encoding'
    },
    fields: {
      resource_size: 'resouce.size',
      resource_load: 'resource.load',
      resource_dns: 'resource.dns',
      resource_tcp: 'resource.tcp',
      resource_ssl: 'resource.ssl',
      resource_ttfb: 'resource.ttfb',
      resource_trans: 'resource.trans',
      resource_firstbyte: 'resource.firstbyte',
      request_header: ['string', 'request.header'],
      response_header: ['string', 'response.header'],
      page_url: ['string', 'page.route'],
      page_referer: ['string', 'page.referer']
    }
  },
  js_error: {
    type: _enums.RumEventType.ERROR,
    tags: {
      app_id: 'application.id',
      env: '_dd.env',
      app_version: '_dd.version',
      sdk_name: '_dd.sdk_name',
      sdk_version: '_dd.sdk_version',
      is_signin: 'user.is_signin',
      os: 'device.os',
      device: 'device.model',
      screen_size: 'device.screen_size',
      network_type: 'device.network',
      platform: 'device.platform',
      platform_version: 'device.platform_version',
      app_framework_version: 'device.framework_version',
      os_version: 'device.os_version',
      origin_id: 'user.origin_id',
      userid: 'user.user_id',
      page_id: 'page.id',
      page_url: 'page.route',
      page_referer: 'page.referer',
      error_type: 'error.type'
    },
    fields: {
      error_starttime: 'error.starttime',
      error_message: ['string', 'error.message'],
      error_stack: ['string', 'error.stack']
    }
  }
};
exports["default"] = _default;