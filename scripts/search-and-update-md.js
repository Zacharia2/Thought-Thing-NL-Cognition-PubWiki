#!/usr/bin/env node

// # created: 20230513093728161
// # creator: WhiteFall
// # title: ⭐黑盒3
// # type: text/markdown
// # 我希望遍历这里面的md文件并生成对应的.meta元信息文件。
// # 我希望可以检索出内容包含特定字符的md文件；C:\Users\Snowy\Documents\GitHub\Neural-Networks\元素\ content:"def:public" 
// # 我希望每次更新都清空这里面的所有文件，然后重新生成。
// # 最后我希望，可以支持图片。


const fs = require("fs");
const path = require("path");
const util = require("util")

/**
 * 创建多层目录
 * @param {string} dirs 多层目录字符串，例如'./tmp/twpubs'
*/
function mkdirs(dirs) {
    if (!fs.existsSync(dirs)) {
        fs.mkdirSync(dirs, { recursive: true });
    }
}

function filterScrMd(srcMdFolderPath, findFileContent) {
    // 过滤出符合条件表达式的文件。
    // 仅查找文件前5行的内容。
    // 返回符合的文件列表数组。
}

function gen_tiddlers_mate(mdFolderPath) {
    fs.readdir(mdFolderPath, (err, files) => {
        files.forEach(f => {
            let fileName = f.split(".")[0];
            let suffix = f.substring(f.lastIndexOf(".") + 1);
            if (suffix == "md") {
                let metaFileName = f + ".meta";
                let data = {
                    "creator": "WhiteFall",
                    "title": fileName,
                    "type": "text/markdown",
                };
                console.log(metaFileName);
                let metaFilePath = path.resolve(mdFolderPath, metaFileName);
                console.log(metaFilePath);
                let wdate = util.format('creator: %s\ntitle: %s\ntype: %s\n', data.creator, data.title, data.type);

                fs.writeFile(metaFilePath, wdate, { 'flag': 'w' }, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            } else {
                console.log("Non-md file. Skip :: " + f);
            }
        });
        console.log("全部工作完成！");
    });
}

function deleteall(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file, index) => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                // recurse
                deleteall(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
    mkdirs(path);
};



function main() {
    const srcMdFolderPath = "C:\\Users\\Snowy\\Documents\\GitHub\\Neural-Networks\\元素\\";
    const findFileContent = "def:public";
    const mdFolderPath = "./tiddlers/MDFiles/";

    filterScrMd(srcMdFolderPath, findFileContent);
    // deleteall(mdFolderPath);
    gen_tiddlers_mate(mdFolderPath);

}
module.exports = {
    main: main,
};
