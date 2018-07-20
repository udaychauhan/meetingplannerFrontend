define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/meeting/addMeeting",
    "title": "Create New  Meeting",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autToken",
            "description": "<p>Token generated from Login.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Meeting Created.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\tInformation about the meeting\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingAddmeeting"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/deleteMeeting",
    "title": "Delete Meeting",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autToken",
            "description": "<p>Token generated from Login.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Meeting Deleted.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\tInformation about the meeting\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingDeletemeeting"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/getAllMeetingsForUser",
    "title": "Get MeetingBy UserId",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autToken",
            "description": "<p>Token generated from Login.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Meeting Found.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\tInformation about the meeting\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingGetallmeetingsforuser"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/getMeetingByMeetingId",
    "title": "Get Meeting",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autToken",
            "description": "<p>Token generated from Login.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Meeting Found.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\tInformation about the meeting\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingGetmeetingbymeetingid"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/updateMeeting",
    "title": "Update  Meeting",
    "version": "0.0.1",
    "group": "Meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autToken",
            "description": "<p>Token generated from Login.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "meetingId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "where",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "purpose",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "adminId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n           \"message\": \"Meeting Updated\"\n           \"status\": 200,\n           \"data\": {\n               nOk: number,\n               modified : 1\n           }\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/meeting.js",
    "groupTitle": "Meeting",
    "name": "PostApiV1MeetingUpdatemeeting"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all users",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>AuthToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"All User Details Found\",\n \"status\": 200,\n \"data\": Array of users\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/changepassword",
    "title": "Change Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token generated from forgot password api. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user that he wants to change. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Password changed for uday@gmail.com\"\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersChangepassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotpassword",
    "title": "Forgot Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "Use",
            "description": "<p>the url on your mail as authentication to change password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Mail sent\"\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"countryCode\" : number\n        \"phoneNumber\": 2234435524,\n        \"emailId\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Create New  User",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>name of the suer passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>category of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phoneNUmber",
            "description": "<p>category of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"User Created.\",\n  \"status\": 200,\n  \"data\": [\n\t\t\t\t{\n\t\t\t\t\t_id: \"string\",\n                        firstName: \"string\",\n                        lastName: \"string\",\n                        emailId: \"string\",\n                        countryCode : \"number\",\n                        phoneNumber: \"number\",\n                        userId:\"string\",\n                        createdOn:\"string\"\n                  __v: number\n\t\t\t\t}\n  \t\t]\n \t}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  }
] });
