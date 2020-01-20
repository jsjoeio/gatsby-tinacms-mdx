/* eslint-disable */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tinacms'), require('react'), require('js-yaml'), require('@tinacms/form-builder')) :
    typeof define === 'function' && define.amd ? define(['exports', 'tinacms', 'react', 'js-yaml', '@tinacms/form-builder'], factory) :
    (global = global || self, factory(global['gatsby-tinacms-mdx'] = {}, global.tinacms, global.React, global.yaml, global.formBuilder));
}(this, (function (exports, tinacms, React, yaml, formBuilder) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    var ERROR_MISSING_MDX_PATH = 'useMdxForm(mdx) Required attribute `fileRelativePath` was not found on `mdx` node.' +
        "\n\n1. Check if the `...TinaMdx` fragment is included in the mdx GraphQL query. For example:\n\nexport const pageQuery = graphql`\n  query BlogPostBySlug($slug: String!) {\n    mdx(fields: { slug: { eq: $slug } }) {\n      ...TinaMdx\n      // etc...\n    }\n }\n`\n  ";
    var ERROR_MISSING_MDX_RAW_MARKDOWN = 'useMdxForm(mdx) Required attribute `rawMarkdownBody` was not found on `mdx` node.' +
        "\n\n1. Check if the `...TinaMdx` fragment is included in the mdx GraphQL query. For example:\n\nexport const pageQuery = graphql`\n  query BlogPostBySlug($slug: String!) {\n    mdx(fields: { slug: { eq: $slug } }) {\n      ...TinaMdx\n      // etc...\n    }\n }\n`\n  ";
    var ERROR_MISSING_MDX_RAW_FRONTMATTER = 'useMdxForm(mdx) Required attribute `rawFrontmatter` was not found on `mdx` node.' +
        "\n\n1. Check if the `...TinaMdx` fragment is included in the mdx GraphQL query. For example:\n\nexport const pageQuery = graphql`\n  query BlogPostBySlug($slug: String!) {\n    mdx(fields: { slug: { eq: $slug } }) {\n      rawFrontmatter\n      // etc...\n    }\n }\n`\n  ";
    var ERROR_INVALID_QUERY_NAME = function (queryName) {
        return "useMdxForm(mdx) '" + queryName + "' was not found on the top node of the graphql query" +
            ("\n\n1. Check if the '" + queryName + "' attribute is included in the GraphQL query. For example:\n\nexport const pageQuery = graphql`\n  query BlogPostBySlug($slug: String!) {\n    mdx(fields: { slug: { eq: $slug } }) {\n      ...TinaMdx\n      // etc...\n    }\n }\n\n2. If you are using an alias, For example:\n\n   export const pageQuery = graphql`\n     query BlogPostBySlug($slug: String!) {\n       " + queryName + ": mdx(fields: { slug: { eq: $slug } }) {\n          ...TinaMdx\n       // etc...\n       }\n    }\n\n  then you can optionally use the 'queryName' option to specify a new property in place of 'mdx':\n\n    export const mdxForm(BlogPostTemplate, { queryName: " + queryName + " })\n`\n  ");
    };

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    function toMarkdownString(remark) {
        return ('---\n' +
            yaml.dump(remark.rawFrontmatter) +
            '---\n' +
            (remark.rawMarkdownBody || ''));
    }

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    function generateFields(post) {
        var frontmatterFields = Object.keys(post.rawFrontmatter).map(function (key) { return ({
            component: 'text',
            name: "rawFrontmatter." + key
        }); });
        return __spreadArrays(frontmatterFields, [
            { component: 'markdown', name: 'rawMarkdownBody' }
        ]);
    }

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    var matter = require('gray-matter');
    function useMdxForm(_mdx, formOverrrides) {
        if (formOverrrides === void 0) { formOverrrides = {}; }
        var mdx = usePersistentValue(_mdx);
        /**
         * We're returning early here which means all the hooks called by this hook
         * violate the rules of hooks. In the case of the check for
         * `NODE_ENV === 'production'` this should be a non-issue because NODE_ENV
         * will never change at runtime.
         */
        if (!mdx || process.env.NODE_ENV === 'production') {
            return [mdx, null];
        }
        validateMdx(mdx);
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var cms = tinacms.useCMS();
        var label = formOverrrides.label || mdx.frontmatter.title;
        var id = mdx.fileRelativePath;
        var actions = formOverrrides.actions;
        /**
         * The state of the Mdx, generated from the contents of the
         * Markdown file currently on disk. This state will contain any
         * un-committed changes in the Markdown file.
         */
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var valuesOnDisk = React.useMemo(function () { return ({
            fileRelativePath: mdx.fileRelativePath,
            frontmatter: mdx.frontmatter,
            rawMarkdownBody: mdx.rawMarkdownBody,
            rawFrontmatter: JSON.parse(mdx.rawFrontmatter)
        }); }, [mdx.rawFrontmatter, mdx.rawMarkdownBody]);
        /**
         * The state of the Mdx, generated from the contents of the
         * Markdown file at the HEAD of this git branch.
         */
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var _a = React.useState(), valuesInGit = _a[0], setValuesInGit = _a[1];
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        React.useEffect(function () {
            cms.api.git
                .show(id) // Load the contents of this file at HEAD
                .then(function (git) {
                // Parse the content into the Mdx data structure and store it in state.
                var _a = matter(git.content), rawMarkdownBody = _a.content, rawFrontmatter = _a.data;
                setValuesInGit(__assign(__assign({}, valuesOnDisk), { rawFrontmatter: rawFrontmatter, rawMarkdownBody: rawMarkdownBody }));
            })
                .catch(function (e) {
                console.log('FAILED', e);
            });
        }, [id]);
        /**
         * The list of Field definitions used to generate the form.
         */
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var fields = React.useMemo(function () {
            var fields = formOverrrides.fields || generateFields(valuesOnDisk);
            fields = fields.map(function (field) {
                /**
                 * Treat the field.name prefix `frontmatter` as an alias to
                 * `rawFrontmatter`. This is to make defining fields more intuitive.
                 */
                if (field.name === 'frontmatter' ||
                    field.name.startsWith('frontmatter.')) {
                    return __assign(__assign({}, field), { name: field.name.replace('frontmatter', 'rawFrontmatter') });
                }
                return field;
            });
            return fields;
        }, [formOverrrides.fields]);
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var _b = tinacms.useForm({
            label: label,
            id: id,
            initialValues: valuesInGit,
            fields: fields,
            onSubmit: function (data) {
                return cms.api.git.onSubmit({
                    files: [data.fileRelativePath],
                    message: data.__commit_message || 'Tina commit',
                    name: data.__commit_name,
                    email: data.__commit_email
                });
            },
            reset: function () {
                return cms.api.git.reset({ files: [id] });
            },
            actions: actions
        },
        // The Form will be updated if these values change.
        {
            label: label,
            fields: fields,
            values: valuesOnDisk
        }), form = _b[1];
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var writeToDisk = React.useCallback(function (formState) {
            cms.api.git.onChange({
                fileRelativePath: formState.values.fileRelativePath,
                content: toMarkdownString(formState.values)
            });
        }, []);
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        tinacms.useWatchFormValues(form, writeToDisk);
        return [mdx, form];
    }
    function useLocalMdx(mdx, formOverrrides) {
        if (formOverrrides === void 0) { formOverrrides = {}; }
        var _a = useMdxForm(mdx, formOverrrides), values = _a[0], form = _a[1];
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore form can be `null` and usePlugins doesn't like that.
        tinacms.usePlugins(form);
        return [values, form];
    }
    function useGlobalMdx(mdx, formOverrrides) {
        if (formOverrrides === void 0) { formOverrrides = {}; }
        var _a = useMdxForm(mdx, formOverrrides), values = _a[0], form = _a[1];
        tinacms.usePlugins(React.useMemo(function () {
            if (form) {
                return new tinacms.GlobalFormPlugin(form, null);
            }
        }, [form]));
        return [values, form];
    }
    /**
     * Throws an error if the Mdx node does not have the
     * fields required for editing.
     */
    function validateMdx(mdx) {
        if (typeof mdx.fileRelativePath === 'undefined') {
            throw new Error(ERROR_MISSING_MDX_PATH);
        }
        if (typeof mdx.rawFrontmatter === 'undefined') {
            throw new Error(ERROR_MISSING_MDX_RAW_FRONTMATTER);
        }
        if (typeof mdx.rawMarkdownBody === 'undefined') {
            throw new Error(ERROR_MISSING_MDX_RAW_MARKDOWN);
        }
    }
    function usePersistentValue(nextData) {
        var _a = React.useState(nextData), data = _a[0], setData = _a[1];
        React.useEffect(function () {
            setData(nextData || data);
        }, [nextData]);
        return data;
    }

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    function mdxForm(Component, options) {
        if (options === void 0) { options = {}; }
        return function MdxForm(props) {
            var mdx = useLocalMdx(getMdx(props.data, options.queryName), options)[0];
            return React.createElement(Component, __assign({}, props, { data: __assign(__assign({}, props.data), { mdx: mdx }) }));
        };
    }
    function liveMdx(Component, options) {
        if (options === void 0) { options = {}; }
        return function MdxForm(props) {
            var _a = useLocalMdx(getMdx(props.data, options.queryName), options), mdx = _a[0], form = _a[1];
            return (React.createElement(formBuilder.TinaForm, { form: form }, function (editingProps) {
                return (React.createElement(Component, __assign({}, props, { data: __assign(__assign({}, props.data), { mdx: mdx }) }, editingProps, { form: form })));
            }));
        };
    }
    function globalMdxForm(Component, options) {
        if (options === void 0) { options = {}; }
        return function MdxForm(props) {
            var mdx = useGlobalMdx(getMdx(props.data, options.queryName), options)[0];
            return React.createElement(Component, __assign({}, props, { data: __assign(__assign({}, props.data), { mdx: mdx }) }));
        };
    }
    var getMdx = function (data, queryName) {
        if (queryName === void 0) { queryName = 'mdx'; }
        var mdx = data[queryName];
        if (!mdx) {
            throw ERROR_INVALID_QUERY_NAME(queryName);
        }
        return mdx;
    };

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    function MdxForm(_a) {
        var _mdx = _a._mdx, render = _a.render, options = __rest(_a, ["_mdx", "render"]);
        var _b = useLocalMdx(_mdx, options), mdx = _b[0], form = _b[1];
        return render({ form: form, mdx: mdx });
    }

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    var MISSING_FILENAME_MESSAGE = 'createMdxButton must be given `filename(form): string`';
    var MISSING_FIELDS_MESSAGE = 'createMdxButton must be given `fields: Field[]` with at least 1 item';
    /**
     *
     * @deprecated in favour of calling `CreateMdxPlugin` class directly.
     */
    function createMdxButton(options) {
        return new MdxCreatorPlugin(options);
    }
    var MdxCreatorPlugin = /** @class */ (function () {
        function MdxCreatorPlugin(options) {
            this.__type = 'content-creator';
            if (!options.filename) {
                console.error(MISSING_FILENAME_MESSAGE);
                throw new Error(MISSING_FILENAME_MESSAGE);
            }
            if (!options.fields || options.fields.length === 0) {
                console.error(MISSING_FIELDS_MESSAGE);
                throw new Error(MISSING_FIELDS_MESSAGE);
            }
            this.name = options.label;
            this.fields = options.fields;
            this.filename = options.filename;
            this.frontmatter = options.frontmatter || (function () { return ({}); });
            this.body = options.body || (function () { return ''; });
        }
        MdxCreatorPlugin.prototype.onSubmit = function (form, cms) {
            return __awaiter(this, void 0, void 0, function () {
                var fileRelativePath, rawFrontmatter, rawMarkdownBody;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.filename(form)];
                        case 1:
                            fileRelativePath = _a.sent();
                            return [4 /*yield*/, this.frontmatter(form)];
                        case 2:
                            rawFrontmatter = _a.sent();
                            return [4 /*yield*/, this.body(form)];
                        case 3:
                            rawMarkdownBody = _a.sent();
                            cms.api.git.onChange({
                                fileRelativePath: fileRelativePath,
                                content: toMarkdownString({
                                    fileRelativePath: fileRelativePath,
                                    rawFrontmatter: rawFrontmatter,
                                    rawMarkdownBody: rawMarkdownBody,
                                }),
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        return MdxCreatorPlugin;
    }());

    /**

    Copyright 2019 Forestry.io Inc

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    */
    function DeleteAction(_a) {
        var _this = this;
        var form = _a.form;
        var cms = tinacms.useCMS();
        return (React.createElement(tinacms.ActionButton, { onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!confirm("Are you sure you want to delete " + form.values.fileRelativePath + "?")) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, cms.api.git.onDelete({
                                    relPath: form.values.fileRelativePath,
                                })];
                        case 1:
                            _a.sent();
                            window.history.back();
                            return [2 /*return*/];
                    }
                });
            }); } }, "Delete"));
    }

    exports.DeleteAction = DeleteAction;
    exports.MdxCreatorPlugin = MdxCreatorPlugin;
    exports.MdxForm = MdxForm;
    exports.createMdxButton = createMdxButton;
    exports.globalMdxForm = globalMdxForm;
    exports.liveMdx = liveMdx;
    exports.mdxForm = mdxForm;
    exports.useGlobalMdx = useGlobalMdx;
    exports.useLocalMdx = useLocalMdx;
    exports.useMdxForm = useMdxForm;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
