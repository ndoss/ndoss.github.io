exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C6\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"foo\":{\"target\":\"C7\",\"id\":\"foo\",\"remoteTrackingBranchID\":\"o/foo\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"o/foo\":{\"target\":\"C1\",\"id\":\"o/foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C3\",\"C6\"],\"id\":\"C7\"}},\"HEAD\":{\"target\":\"foo\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"foo\":{\"target\":\"C6\",\"id\":\"foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"foo\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git fetch origin master~1:foo;git fetch origin foo:master;git checkout foo;git merge master",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\",\"remoteTrackingBranchID\":\"o/master\"},\"foo\":{\"target\":\"C1\",\"id\":\"foo\",\"remoteTrackingBranchID\":\"o/foo\"},\"o/master\":{\"target\":\"C1\",\"id\":\"o/master\",\"remoteTrackingBranchID\":null},\"o/foo\":{\"target\":\"C1\",\"id\":\"o/foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"C1\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"master\":{\"target\":\"C4\",\"id\":\"master\",\"remoteTrackingBranchID\":null},\"foo\":{\"target\":\"C6\",\"id\":\"foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"foo\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "Fetch arguments",
    "zh_CN": "Fetch arguments",
    "de_DE": "Optionen für Fetch"
  },
  "hint": {
    "en_US": "Pay attention how the commit ids may have swapped! You can read slides again with \"help level\"",
    "zh_CN": "注意下提交对象的id是如何交换的! 你可以通过`help level`再次切到幻灯片!",
    "de_DE": "Beachte wie die Commit IDs getauscht wurden! Du kannst den Einführungsdialog mit \"help level\" erneut anzeigen"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git fetch arguments",
              "",
              "So we've just learned all about git push arguments, this cool `<place>` parameter, and even colon refspecs (`<source>:<destination>`). Can we use all this knowledge for `git fetch` as well?",
              "",
              "You betcha! The arguments for `git fetch` are actually *very, very* similar to those for `git push`. It's the same type of concepts but just applied in the opposite direction (since now you are downloading commits rather than uploading).",
              "",
              "Let's go over the concepts one at a time..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### The `<place>` parameter",
              "",
              "If you specify a place with git fetch like in the following command:",
              "",
              "`git fetch origin foo`",
              "",
              "Git will go to the `foo` branch on the remote, grab all the commits that aren't present locally, and then plop them down onto the `o/foo` branch locally.",
              "",
              "Let's see this in action (just as a refresher)."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "By specifying a place..."
            ],
            "afterMarkdowns": [
              "We download only the commits from `foo` and place them on `o/foo`"
            ],
            "command": "git fetch origin foo",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "You might be wondering -- why did git plop those commits onto the `o/foo` remote branch rather than just plopping them onto my local `foo` branch? I thought the `<place>` parameter is a place that exists both locally and on the remote?",
              "",
              "Well git makes a special exception in this case because you might have work on the `foo` branch that you don't want to mess up!! This ties into the earlier lesson on `git fetch` -- it doesn't update your local non-remote branches, it only downloads the commits (so you can inspect / merge them later).",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "\"Well in that case, what happens if I explicitly define both the source and destination with `<source>:<destination>`?\"",
              "",
              "If you feel passionate enough to fetch commits *directly* onto a local branch, then yes you can specify that with a colon refspec. You can't fetch commits onto a branch that is checked out, but otherwise git will allow this.",
              "",
              "Here is the only catch though -- `<source>` is now a place on the *remote* and `<destination>` is a *local* place to put those commits. It's the exact opposite of git push, and that makes sense since we are transferring data in the opposite direction!",
              "",
              "That being said, developers rarely do this in practice. I'm introducing it mainly as a way to conceptualize how `fetch` and `push` are quite similar, just in opposite directions."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see this craziness in action:"
            ],
            "afterMarkdowns": [
              "Wow! See, git resolved `foo~1` as a place on the origin and then downloaded those commits to `bar` (which was a local branch). Notice how `foo` and `o/foo` were not updated since we specified a destination."
            ],
            "command": "git fetch origin foo~1:bar",
            "beforeCommand": "git branch foo; git clone; git branch bar; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "What if the destination doesn't exist before I run the command? Let's see the last slide but without `bar` existing beforehand."
            ],
            "afterMarkdowns": [
              "See, it's JUST like git push. Git made the destination locally before fetching, just like git will make the destination on remote before pushing (if it doesn't exist)."
            ],
            "command": "git fetch origin foo~1:bar",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "No args?",
              "",
              "If `git fetch` receives no arguments, it just downloads all the commits from the remote onto all the remote branches..."
            ],
            "afterMarkdowns": [
              "Pretty simple, but worth going over just once."
            ],
            "command": "git fetch",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo; git fakeTeamwork master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, enough talking! To finish this level, fetch just the specified commits in the goal visualization. Get fancy with those commands!",
              "",
              "You will have to specify the source and destination for both fetch commands. Pay attention to the goal visualization since the IDs may be switched around!"
            ]
          }
        }
      ]
    },
   "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git fetch arguments",
              "",
              "我们刚学习了git push的参数, 特别是`<place>`参数, 更特别的冒号分隔(`<source>:<destination>`). 这写参数可以用于`git fetch`吗?",
              "",
              "你猜中了! git fetch的参数和git push相当相似. 都是相同的概念, 但是相反相反(因为现在你是下载 而非上传) ",
              "",
              "我们过一个概念.."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "###  `<place>` 参数",
              "",
              "你可以像如下命令这样为git fetch设置<place>",
              "",
              "`git fetch origin foo`",
              "",
              "Git 会来到远端的`foo`分支, 然后抓取所有不在本地的新提交, 放到本地的分支`o/foo`",
              "",
              "我们看看这个动作(这像是更新器) "
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "通过指定place..."
            ],
            "afterMarkdowns": [
              "我们只下载更新了o/foo"
            ],
            "command": "git fetch origin foo",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "你可以想知道 -- 为何git 会将新提交压入到o/foo 而不是 压入到我本地的foo. 我想 <place>参数就是同时存在于本地和远端 的 <place> ",
              "",
              "好吧, 本例中git 有个特殊例外, 因为你可能位于foo 分支, 你也不想弄乱它. 这得联系之前的课程 -- 它不会更新你的本地工作, 它只是下载提交(这样, 稍后你可以检查 或者 合并之).  ",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "\"Well in that case, what happens if I explicitly define both the source and destination with `<source>:<destination>`?\"",
              "如果我们设定了 `<source>:<destination>`会发生什么呢?",
              "",
              "如果你觉得直接更新本地分支很爽, 那你就用冒号refspec吧. 不过, 你不能在检出的分支上干这个事.",
              "",
              "这里只有一个特点 -- `source` 是远端的位置, 而`<destination>`是要放置提交的本地位置, 这真是有趣 -- 这也是传送数据的对立方向! ",
              "",
              "话虽如此, 开发者很少这么做. 我已经介绍了, 概念上fetch/push很相似, 只是它们方向相反.  "
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "我们看看更疯狂的例子:"
            ],
            "afterMarkdowns": [
              "哇! 看见了吧, git 将`foo~1` 解析成一个origin的位置, 然后下载到了本地`bar`. 注意foo 和 o/foo都没有得到更新 (因为我们指定了destination)."
            ],
            "command": "git fetch origin foo~1:bar",
            "beforeCommand": "git branch foo; git clone; git branch bar; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "如果 destination 不存在呢? 我们看看上个幻灯片(不含bar)! "
            ],
            "afterMarkdowns": [
              "看见了吧, 它就像是git push. Git会自己确立本地destination, 就像是git在push时, 会自己确立destination(如果它不存在的话)"
            ],
            "command": "git fetch origin foo~1",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "没有参数呢?",
              "",
              "如果 `git fetch` 没有参数, 它会下载所有远端分支.."
            ],
            "afterMarkdowns": [
              "相当简单, 但是值得一次更新!"
            ],
            "command": "git fetch",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo; git fakeTeamwork master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "好, 说得太多了! 要完成本节, 抓取可视窗口指定的提交, 使用这些魔幻的命令吧.",
              "",
              "使用fetch时, 你必须指定source/destination. 注意一下可视窗口, 因为提交对象的id可以会被切换哦!"
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
              "## Git Fetch Optionen",
              "",
              "Nun haben wir also alles über `git push` Optionen gelernt, diesen coolen `<Ort>`-Parameter, and sogar über mit Doppelpunkt getrennte Ref-Spezifikationen (`<Quelle>:<Ziel>`). Können wir all dieses neu erworbene Wissen auch auf `git fetch` anwenden?",
              "",
              "Jede Wette! Die Optionen für `git fetch` sind wirklicht *sehr, sehr* ähnlich denen von `git push`. Es sind dieselben Verfahren, nur in die andere Richtung angewendet (da man bei `fetch` herunterlädt anstatt hochzuladen).",
              "",
              "Gehen wir die verschiedenen Verfahrensweise mal eine nach der anderen durch ..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "### Der Parameter `<Ort>`",
              "",
              "Wenn du, wie folgt, einen \"Ort\" bei `git fetch` angibst:",
              "",
              "`git fetch origin foo`",
              "",
              "wird Git zum Branch `foo` auf dem Remote gehen, dort alle Änderungen holen, die es lokal noch nicht gibt, und sie an den lokalen Branch `o/foo` anhängen.",
              "",
              "Schauen wir uns das mal live an (nur zur Wiederholung)"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Durch Angabe eines Ortes ..."
            ],
            "afterMarkdowns": [
              "... laden wir die fehlenden Commits von `foo` und packen sie auf `o/foo` drauf."
            ],
            "command": "git fetch origin foo",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Du wunderst dich vielleicht warum Git diese Commits auf den `o/foo` Branch gepacht hat, anstatt einfach direkt auf den lokalen Branch `foo`? Zeigt der Parameter `<Ort>` nicht einen Ort an, der sowohl lokal als auch entfernt existiert?",
              "",
              "Nun ja, Git geht diesen Schritt weil du auf `foo` ja noch Commits haben könntest, die nicht auf dem Server sind, und da will es nichts durcheinander bringen. Ähnlich wie beim früheren Level zu `git fetch` -- es aktualisiert nicht deine lokalen Arbeits-Branches, es lädt die Commits nur in die `o` (bzw. `origin`) Branches, damit du sie dir in Ruhe anschauen und integrieren kannst.",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Wenn das so ist, was passiert dann wenn ich explizit Quelle und Ziel im Ort angebe?",
              "",
              "Wenn du Commits wirklich per `fetch` *direkt* auf einen lokalen Branch holen willst, dann, ja, kannst du das mit einer Ref-Spezifikation erreichen. Das funktioniert nicht mit deinem gerade ausgecheckten Branch, aber davon abgesehen lässt Git es zu.",
              "",
              "Nur ein Haken -- `<Quelle>` bezeichnet jetzt einen Ort auf dem *entfernten* Server und `<Ziel>` ist ein *lokaler* Ort, wo die Commits hin sollen. Es ist genau umgekehrt wie bei `git push` und das ist logisch, denn wir übertragen die Daten ja auch in die umgekehrte Richtung!",
              "",
              "Davon abgesehen benutzt man das in der Praxis kaum. Ich zeige das vor allem um zu verdeutlichen, wie `fetch` und `push` sehr ähnlich sind, nur in entgegengesetzten Richtungen."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Schauen wir uns den Quatsch mal in Aktion an:"
            ],
            "afterMarkdowns": [
              "Wow! Siehst du, git löst `foo~1` als Ort auf dem Server `origin` auf und lädt dessen Commits herunter in `bar` hinein. Beachte wie `foo` und `o/foo` *nicht* aktualisiert wurden, da wir ein Ziel angegeben haben."
            ],
            "command": "git fetch origin foo~1:bar",
            "beforeCommand": "git branch foo; git clone; git branch bar; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Was ist denn wenn das Ziel nicht existiert, für das ich den Befehl ausführe? Schauen wir uns das letzte Beispiel noch mal an, nur dass `bar` jetzt noch nicht existiert."
            ],
            "afterMarkdowns": [
              "Siehst du, es ist *genau* wie `git push`. Git erstellt das Ziel lokal bevor es den `fetch` ausführt, genauso wie Git erst das Ziel auf dem Remote erstellt, befor es pusht (falls das Ziel nicht existiert)."
            ],
            "command": "git fetch origin foo~1:bar",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo 2"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Keine Optionen?",
              "",
              "Wenn bei `git fetch` keine Optionen angegeben werden, lädt es einfach alle Commits vom Remote auf die lokalen Abbildungen aller Remote Branches ..."
            ],
            "afterMarkdowns": [
              "Ziemlich einfach, aber man sollte es mal gesehen haben."
            ],
            "command": "git fetch",
            "beforeCommand": "git branch foo; git clone; git fakeTeamwork foo; git fakeTeamwork master"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ok, genug gelabert! Um den Level zu schaffen musst du nur die im Zielbild angegebenen Commits per `fetch` holen. Sei kreativ mit den Befehlen!",
              "",
              "Du wirst Quelle und Ziel bei beiden `fetch` Befehlen angeben müssen. Schau dir das Zielbild gut an, da die IDs vertauscht sein könnten!"
            ]
          }
        }
      ]
    }
  }
};
