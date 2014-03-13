exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C5\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\",\"localBranchesThatTrackThis\":null},\"o/master\":{\"target\":\"C3\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":[\"master\"]}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git clone;git fakeTeamwork 2;git commit ;git pull",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Faking Teamwork",
    "de_DE": "Teamarbeit simulieren",
    "zh_CN": "Faking Teamwork"
  },
  "hint": {
    "en_US": "remember you can specify the number of commits to fake",
    "de_DE": "Nicht vergessen, du kannst angeben wieviele Commits simuliert werden sollen.",
    "zh_CN": "记住为fake指定数量"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Simulating collaboration",
              "",
              "So here is the tricky thing -- for some of these upcoming lessons, we need to teach you how to pull down changes that were introduced in the remote.",
              "",
              "That means we need to essentially \"pretend\" that the remote was updated by one of your coworkers / friends / collaborators, sometimes on a specific branch or a certain number of commits.",
              "",
              "In order to do this, we introduced the aptly-named command `git fakeTeamwork`! It's pretty self explanatory, let's see a demo..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "The default behavior of `fakeTeamwork` is to simply plop down a commit on master"
            ],
            "afterMarkdowns": [
              "There we go -- the remote was updated with a new commit, and we haven't downloaded that commit yet because we haven't run `git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "You can also specify the number of commits or the branch by appending them to the command"
            ],
            "afterMarkdowns": [
              "With one command we simulated a teammate pushing three commits to the `foo` branch on our remote"
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "The upcoming levels are going to be pretty difficult, so we're asking more of you for this level.",
              "",
              "Go ahead and make a remote (with `git clone`), fake some changes on that remote, commit yourself, and then pull down those changes. It's like a few lessons in one!"
            ]
          }
        }
      ]
    },
   "zh_CN":{
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 仿真协同",
              "",
              "这里有一件棘手的事 -- 接下来的课程中, 我们需要教你如果从远端拉取变更",
              "",
              "这意味着，我们需要假装你的同事、朋友、合作伙伴已经将远端更新到最新了，这些变更有时是一个特别的分支或者确定数目的提交. ",
              "",
              "为了做到这点, 我们引入一个自造命令`git fakeTeamwork`. 它是自解释的, 先看演示.."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "`fakeTeamwork` 默认行为就是在在远端master做一个提交."
            ],
            "afterMarkdowns": [
              "成了-- 远端更新了一个新提交. 我们还没有下载它, 因为我们还没有使用`git fetch`."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "你可以指定提交的数量, 只需要在命令后接一个数字!"
            ],
            "afterMarkdowns": [
              "通过一个命令，我们就模拟了队友push 3 个提交到远端的foo分支.  "
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "接下来的学习会相当的困难，所以在本节我们会询问你很多问题. ",
              "",
              "继续前进 -- 克隆一个远端，再提交一些修改，在你自己的分支上也做一些提交，再pull一下远端. 这看起来这包含了好几节的课程.  "
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Zusammenarbeit simulieren",
              "",
              "Hier ist das Problem -- für einige der folgenden Level müssen wir lernen, wie man Änderungen vom entfernten Server holt.",
              "",
              "Das heißt wir müssen im Grunde \"so tun\" also ob der Server von einem Kollegen / Freund / Mitarbeiter aktualisiert worden wäre, manchmal ein bestimmter Branch oder eine bestimmte Anzahl von Commits.",
              "",
              "Um das zu tun führen wir den passend benannten Befehl `git fakeTeamwork` ein! Er ist ziemlich selbsterklärend, schauen wir uns ihn an ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Das normale Verhalten von `fakeTeamwork` ist es, einen Commit auf den entfernten `master` zu machen."
            ],
            "afterMarkdowns": [
              "Da haben wir's -- der Server ist mit einem neuen Commit aktualisiert worden und wir haben ihn noch nicht lokal, weil wir nicht `git fetch` oder `git pull` ausgeführt haben."
            ],
            "command": "git fakeTeamwork",
            "beforeCommand": "git clone"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Du kannst auch angeben wieviele Commits oder auf welchem Branch sie gemacht werden sollen, indem du das an den Befehl anhängst."
            ],
            "afterMarkdowns": [
              "Mit einem Befehlt haben wir simuliert, dass ein Kollege drei Commits auf den  Branch `foo` gepackt hat."
            ],
            "command": "git fakeTeamwork foo 3",
            "beforeCommand": "git branch foo; git clone"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Die kommenden Level werden recht anspruchsvoll, daher verlangen wir auch in diesem Level schon etwas mehr.",
              "",
              "Leg los und erstelle ein Remote (mit `git clone`), simuliere ein paar Änderungen auf dem Server, committe lokal und dann zieh dir die Änderungen vom Server. Das ist wie mehrere Level in einem!"
            ]
          }
        }
      ]
    }
  }
};
