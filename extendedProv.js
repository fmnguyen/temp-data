const provenanceData = {
    "prefix": {
        "prov": "http://www.w3.org/ns/prov#",
        "rdt": "https://github.com/End-to-end-provenance/ExtendedProvJson/blob/master/JSON-format.md"
    },

    "agent": {
        "a1": {
            "tool.name": "rdtLite",
            "tool.version": "1.2",
            "json.version": "2.3",
            "args.names": [
                "overwrite",
                "details",
                "snapshot.size",
                "save.debug"
            ],
            "args.values": [
                "TRUE",
                "TRUE",
                "0",
                "FALSE"
            ],
            "args.types": [
                "logical",
                "logical",
                "numeric",
                "logical"
            ],
            "type": "Agent"
        }
    },

    "activity": {
        "p1": {
            "name": "lineplot.R",
            "type": "Start",
            "elapsedTime": "0.19",
            "scriptNum": "NA",
            "startLine": "NA",
            "startCol": "NA",
            "endLine": "NA",
            "endCol": "NA"
        },
        "p2": {
            "name": "rm(list=ls())",
            "type": "Operation",
            "elapsedTime": "0.083",
            "scriptNum": 1,
            "startLine": 12,
            "startCol": 1,
            "endLine": 12,
            "endCol": 13
        },
        "p3": {
            "name": "year <- seq(1990,2012,1)",
            "type": "Operation",
            "elapsedTime": "0.074",
            "scriptNum": 1,
            "startLine": 14,
            "startCol": 1,
            "endLine": 14,
            "endCol": 24
        },
        "p4": {
            "name": "demo <- c(1,1,1,2,3,0,0,1,1,3,0,3,4,5,2,2,2,8,3,2,2,1,0)",
            "type": "Operation",
            "elapsedTime": "0.075",
            "scriptNum": 1,
            "startLine": 16,
            "startCol": 1,
            "endLine": 16,
            "endCol": 56
        },
        "p5": {
            "name": "auto <- c(0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,1,1,1,2,2,1,1)",
            "type": "Operation",
            "elapsedTime": "0.074",
            "scriptNum": 1,
            "startLine": 17,
            "startCol": 1,
            "endLine": 17,
            "endCol": 56
        },
        "p6": {
            "name": "pdf(\"lineplot.pdf\",height=6,width=6)",
            "type": "Operation",
            "elapsedTime": "0.082",
            "scriptNum": 1,
            "startLine": 21,
            "startCol": 1,
            "endLine": 21,
            "endCol": 36
        },
        "p7": {
            "name": "par(mar=c(4,4,4,4))",
            "type": "Operation",
            "elapsedTime": "0.083",
            "scriptNum": 1,
            "startLine": 24,
            "startCol": 1,
            "endLine": 24,
            "endCol": 19
        },
        "p8": {
            "name": "plot(x=year,y=cumsum(demo),type=\"l\",xaxp=c(1990,2012,22),cex",
            "type": "Operation",
            "elapsedTime": "0.081",
            "scriptNum": 1,
            "startLine": 27,
            "startCol": 1,
            "endLine": 29,
            "endCol": 50
        },
        "p9": {
            "name": "lines(x=year,y=cumsum(auto))",
            "type": "Operation",
            "elapsedTime": "0.082",
            "scriptNum": 1,
            "startLine": 30,
            "startCol": 1,
            "endLine": 30,
            "endCol": 28
        },
        "p10": {
            "name": "text(x=2010,y=49,labels=c(\"Democratic \\n countries\"),cex=0.9",
            "type": "Operation",
            "elapsedTime": "0.079",
            "scriptNum": 1,
            "startLine": 31,
            "startCol": 1,
            "endLine": 31,
            "endCol": 61
        },
        "p11": {
            "name": "text(x=2010,y=16,labels=c(\"Autocratic \\n countries\"),cex=0.9",
            "type": "Operation",
            "elapsedTime": "0.078",
            "scriptNum": 1,
            "startLine": 32,
            "startCol": 1,
            "endLine": 32,
            "endCol": 61
        },
        "p12": {
            "name": "dev.off()",
            "type": "Operation",
            "elapsedTime": "0.082",
            "scriptNum": 1,
            "startLine": 35,
            "startCol": 1,
            "endLine": 35,
            "endCol": 9
        },
        "p13": {
            "name": "lineplot.R",
            "type": "Finish",
            "elapsedTime": "0.003",
            "scriptNum": "NA",
            "startLine": "NA",
            "startCol": "NA",
            "endLine": "NA",
            "endCol": "NA"
        }
    },

    "entity": {
        "d1": {
            "name": "year",
            "value": "1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000 2001 2002 2003 2004...",
            "valType": "{\"container\":\"vector\", \"dimension\":[23], \"type\":[\"numeric\"]}",
            "type": "Data",
            "scope": "R_GlobalEnv",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d2": {
            "name": "demo",
            "value": "1 1 1 2 3 0 0 1 1 3 0 3 4 5 2 2 2 8 3 2 2 1 0",
            "valType": "{\"container\":\"vector\", \"dimension\":[23], \"type\":[\"numeric\"]}",
            "type": "Data",
            "scope": "R_GlobalEnv",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d3": {
            "name": "auto",
            "value": "0 0 0 0 0 0 0 0 0 0 0 0 2 0 0 2 1 1 1 2 2 1 1",
            "valType": "{\"container\":\"vector\", \"dimension\":[23], \"type\":[\"numeric\"]}",
            "type": "Data",
            "scope": "R_GlobalEnv",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d4": {
            "name": "dev.2",
            "value": "",
            "valType": "Device",
            "type": "Device",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d5": {
            "name": "dev.2",
            "value": "",
            "valType": "Device",
            "type": "Device",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d6": {
            "name": "dev.2",
            "value": "",
            "valType": "Device",
            "type": "Device",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d7": {
            "name": "dev.2",
            "value": "",
            "valType": "Device",
            "type": "Device",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d8": {
            "name": "dev.2",
            "value": "",
            "valType": "Device",
            "type": "Device",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d9": {
            "name": "dev.2",
            "value": "",
            "valType": "Device",
            "type": "Device",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "",
            "timestamp": "",
            "location": ""
        },
        "d10": {
            "name": "lineplot.pdf",
            "value": "data/10-lineplot.pdf",
            "valType": "{\"container\":\"vector\", \"dimension\":[1], \"type\":[\"character\"]}",
            "type": "File",
            "scope": "undefined",
            "fromEnv": false,
            "hash": "26235b67b88687e2ab5240eeb776e5f2",
            "timestamp": "2019-11-14T09.25.23PST",
            "location": "/home/joe/Documents/ProvVis/dset/lineplot.pdf"
        },

        "environment": {
            "name": "environment",
            "architecture": "x86_64",
            "operatingSystem": "linux-gnu",
            "language": "R",
            "langVersion": "R version 3.6.1 (2019-07-05)",
            "script": "/home/joe/Documents/ProvVis/dset/lineplot.R",
            "scriptTimeStamp": "2019-11-14T09.20.05PST",
            "totalElapsedTime": "1.066",
            "sourcedScripts": "",
            "sourcedScriptTimeStamps": "",
            "workingDirectory": "/home/joe/Documents/ProvVis/dset",
            "provDirectory": "/tmp/RtmpZklEJy/prov_lineplot",
            "provTimestamp": "2019-11-14T09.25.22PST",
            "hashAlgorithm": "md5",
            "type": "Environment"
        },

        "l1": {
            "startLine": "NA",
            "name": "base",
            "version": "3.6.1",
            "type": "library"
        },
        "l2": {
            "startLine": "NA",
            "name": "datasets",
            "version": "3.6.1",
            "type": "library"
        },
        "l3": {
            "startLine": "NA",
            "name": "ggplot2",
            "version": "3.2.1",
            "type": "library"
        },
        "l4": {
            "startLine": "NA",
            "name": "graphics",
            "version": "3.6.1",
            "type": "library"
        },
        "l5": {
            "startLine": "NA",
            "name": "grDevices",
            "version": "3.6.1",
            "type": "library"
        },
        "l6": {
            "startLine": "NA",
            "name": "methods",
            "version": "3.6.1",
            "type": "library"
        },
        "l7": {
            "startLine": "NA",
            "name": "rdtLite",
            "version": "1.2",
            "type": "library"
        },
        "l8": {
            "startLine": "NA",
            "name": "stats",
            "version": "3.6.1",
            "type": "library"
        },
        "l9": {
            "startLine": "NA",
            "name": "utils",
            "version": "3.6.1",
            "type": "library"

        },

        "f1": {
            "startLine": "NA",
            "name": "pdf",
            "type": "library function",
        },
        "f2": {
            "startLine": "NA",
            "name": "par",
            "type": "library function"
        },
        "f3": {
            "startLine": "NA",
            "name": "plot",
            "type": "library function"
        },
        "f4": {
            "startLine": "NA",
            "name": "lines",
            "type": "library function"
        },
        "f5": {
            "startLine": "NA",
            "name": "text",
            "type": "library function"
        },
        "f6": {
            "startLine": "NA",
            "name": "dev.off",
            "type": "library function"
        }
    },

    "wasInformedBy": {
        "pp1": {
            "prov:informant": "p1",
            "prov:informed": "p2"
        },
        "pp2": {
            "prov:informant": "p2",
            "prov:informed": "p3"
        },
        "pp3": {
            "prov:informant": "p3",
            "prov:informed": "p4"
        },
        "pp4": {
            "prov:informant": "p4",
            "prov:informed": "p5"
        },
        "pp5": {
            "prov:informant": "p5",
            "prov:informed": "p6"
        },
        "pp6": {
            "prov:informant": "p6",
            "prov:informed": "p7"
        },
        "pp7": {
            "prov:informant": "p7",
            "prov:informed": "p8"
        },
        "pp8": {
            "prov:informant": "p8",
            "prov:informed": "p9"
        },
        "pp9": {
            "prov:informant": "p9",
            "prov:informed": "p10"
        },
        "pp10": {
            "prov:informant": "p10",
            "prov:informed": "p11"
        },
        "pp11": {
            "prov:informant": "p11",
            "prov:informed": "p12"
        },
        "pp12": {
            "prov:informant": "p12",
            "prov:informed": "p13"
        }
    },

    "wasGeneratedBy": {
        "pd1": {
            "prov:activity": "p3",
            "prov:entity": "d1"
        },
        "pd2": {
            "prov:activity": "p4",
            "prov:entity": "d2"
        },
        "pd3": {
            "prov:activity": "p5",
            "prov:entity": "d3"
        },
        "pd4": {
            "prov:activity": "p6",
            "prov:entity": "d4"
        },
        "pd5": {
            "prov:activity": "p7",
            "prov:entity": "d5"
        },
        "pd6": {
            "prov:activity": "p8",
            "prov:entity": "d6"
        },
        "pd7": {
            "prov:activity": "p9",
            "prov:entity": "d7"
        },
        "pd8": {
            "prov:activity": "p10",
            "prov:entity": "d8"
        },
        "pd9": {
            "prov:activity": "p11",
            "prov:entity": "d9"
        },
        "pd10": {
            "prov:activity": "p12",
            "prov:entity": "d10"
        }
    },

    "used": {
        "dp1": {
            "prov:entity": "d4",
            "prov:activity": "p7"
        },
        "dp2": {
            "prov:entity": "d1",
            "prov:activity": "p8"
        },
        "dp3": {
            "prov:entity": "d2",
            "prov:activity": "p8"
        },
        "dp4": {
            "prov:entity": "d5",
            "prov:activity": "p8"
        },
        "dp5": {
            "prov:entity": "d1",
            "prov:activity": "p9"
        },
        "dp6": {
            "prov:entity": "d3",
            "prov:activity": "p9"
        },
        "dp7": {
            "prov:entity": "d6",
            "prov:activity": "p9"
        },
        "dp8": {
            "prov:entity": "d7",
            "prov:activity": "p10"
        },
        "dp9": {
            "prov:entity": "d8",
            "prov:activity": "p11"
        },
        "dp10": {
            "prov:entity": "d9",
            "prov:activity": "p12"
        },

        "fp1": {
            "prov:entity": "f1",
            "prov:activity": "p6"
        },
        "fp2": {
            "prov:entity": "f2",
            "prov:activity": "p7"
        },
        "fp3": {
            "prov:entity": "f3",
            "prov:activity": "p8"
        },
        "fp4": {
            "prov:entity": "f4",
            "prov:activity": "p9"
        },
        "fp5": {
            "prov:entity": "f5",
            "prov:activity": "p10"
        },
        "fp6": {
            "prov:entity": "f5",
            "prov:activity": "p11"
        },
        "fp7": {
            "prov:entity": "f6",
            "prov:activity": "p12"
        }
    },

    "hadMember": {
        "m1": {
            "prov:collection": "l4",
            "prov:entity": "f2"
        },
        "m2": {
            "prov:collection": "l4",
            "prov:entity": "f3"
        },
        "m3": {
            "prov:collection": "l4",
            "prov:entity": "f4"
        },
        "m4": {
            "prov:collection": "l4",
            "prov:entity": "f5"
        },
        "m5": {
            "prov:collection": "l5",
            "prov:entity": "f1"
        },
        "m6": {
            "prov:collection": "l5",
            "prov:entity": "f6"
        }
    }
}