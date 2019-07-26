load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_Library")
load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_binary")

closure_js_library(
    name = "main_js",
    srcs = [
        "index.js"
    ],
)

closure_js_binary(
    name = "js_bundle",
    srcs = [
        ":main_js"
    ],
    visibility = ["//visibility:public"]
)