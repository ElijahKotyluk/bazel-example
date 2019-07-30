package(default_visibility = ["//visibility:public"])
load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_application")


load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_js_library",
     "closure_js_binary",
     "closure_js_deps",
     "web_library")

alias(name = "entrypoint-sample",
      actual = "//entrypoints:sample.html")

alias(name = "entrypoint-sample-dev",
      actual = "//entrypoints:sample-dev.html")

DEBUG = True

closure_js_library(
    name = "main_js",
    srcs = [
        "index.js",
    ],
    deps = [
      "@io_bazel_rules_closure//closure/library/dom:tagname",
    ],
)

closure_js_deps(
    name = "deps",
    deps = [
        ":main_js",
    ],
)

closure_js_binary(
    name = "bundle",
    deps = [
        ":main_js",
    ],
    entry_points = [
        "boot",
    ],
    language = "ECMASCRIPT5",
    debug = DEBUG,
    formatting = DEBUG and "PRETTY_PRINT" or None,
    dependency_mode = "STRICT",
    compilation_level = "ADVANCED",
)

j2cl_application(
    name = "app",
    entry_points = ["boot"],
    deps = [":main_js"],
)
