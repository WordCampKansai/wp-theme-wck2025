import { replaceInFile } from "replace-in-file";

const options = {
	// 置換を実行したいファイルのパスを設定
	files: "./docs/css/main.css",
	// 置換対象の文字を正規表現で設定
	from: [/\.\.\/images\//g],
	// 置換後の文字を設定
	to: [
		"https://raw.githubusercontent.com/WordCampKansai/wp-theme-wck2025/main/docs/images/",
	],
};

replaceInFile(options, (error, changedFiles) => {
	if (error) return console.error("Error occurred:", error);
	for (let i = 0; i < changedFiles.length; i++) {
		console.log("Modified files:", changedFiles[i].file);
	}
});
